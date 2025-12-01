# Monorepo 設置指南 (Turborepo)

當準備好開發 React Native 版本時，按以下結構重組代碼庫。

---

## 目標結構

```
my-app/
├── apps/
│   ├── web/                    ← 現有 React Web 代碼
│   │   ├── src/
│   │   │   ├── components/     ← Web UI 組件
│   │   │   ├── pages/          ← Web 頁面
│   │   │   └── ...
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── tailwind.config.ts
│   │
│   └── native/                 ← 新建 React Native (Expo)
│       ├── src/
│       │   ├── components/     ← Native UI 組件
│       │   ├── screens/        ← Native 頁面
│       │   └── ...
│       ├── app.json
│       ├── package.json
│       └── tailwind.config.ts  ← NativeWind 配置
│
├── packages/
│   └── shared/                 ← 共享代碼
│       ├── types/              ← 從 src/types/ 搬入
│       │   ├── dashboard.ts
│       │   ├── onboarding.ts
│       │   └── index.ts
│       ├── config/             ← 從 src/config/ 搬入
│       │   ├── app.ts
│       │   ├── dashboard.ts
│       │   ├── onboarding.ts
│       │   └── index.ts
│       ├── lib/
│       │   └── utils.ts        ← cn() 函數
│       ├── contexts/           ← 從 src/contexts/ 搬入
│       │   └── OnboardingContext.tsx
│       ├── hooks/              ← 純邏輯 hooks
│       │   └── use-onboarding.ts
│       ├── package.json
│       └── tsconfig.json
│
├── package.json                ← Workspace root
├── turbo.json                  ← Turborepo 配置
├── pnpm-workspace.yaml         ← pnpm workspace 配置
└── tsconfig.json               ← 根 TypeScript 配置
```

---

## 設置步驟

### 1. 初始化 Turborepo

```bash
# 方法 A: 從現有項目轉換
npx @turbo/codemod create-turbo-config

# 方法 B: 創建新 monorepo 後搬遷
npx create-turbo@latest
```

### 2. 配置 pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### 3. 配置 turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### 4. 設置 packages/shared

```json
// packages/shared/package.json
{
  "name": "@myapp/shared",
  "version": "0.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    "./types": "./src/types/index.ts",
    "./config": "./src/config/index.ts",
    "./lib": "./src/lib/index.ts",
    "./contexts": "./src/contexts/index.ts",
    "./hooks": "./src/hooks/index.ts"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

### 5. 在 apps 中引用 shared

```json
// apps/web/package.json
{
  "dependencies": {
    "@myapp/shared": "workspace:*"
  }
}

// apps/native/package.json  
{
  "dependencies": {
    "@myapp/shared": "workspace:*"
  }
}
```

### 6. 更新 imports

```typescript
// 之前
import { OnboardingFormData } from '@/types/onboarding';
import { APP_CONFIG } from '@/config/app';

// 之後
import { OnboardingFormData } from '@myapp/shared/types';
import { APP_CONFIG } from '@myapp/shared/config';
```

---

## 搬遷清單

### 搬入 packages/shared/ 的文件

| 來源 | 目標 | 標記 |
|------|------|------|
| `src/types/*` | `packages/shared/types/` | `@platform: shared` |
| `src/config/*` | `packages/shared/config/` | `@platform: shared` |
| `src/lib/utils.ts` | `packages/shared/lib/` | `@platform: shared` |
| `src/lib/storage.ts` | `packages/shared/lib/` | `@platform: adaptable` |
| `src/contexts/*` | `packages/shared/contexts/` | `@platform: adaptable` |
| `src/hooks/use-onboarding.ts` | `packages/shared/hooks/` | `@platform: adaptable` |

### 保留在 apps/web/ 的文件

| 文件 | 原因 |
|------|------|
| `src/components/*` | Web UI 組件 |
| `src/pages/*` | Web 頁面路由 |
| `src/index.css` | Web 樣式 |
| `tailwind.config.ts` | Web Tailwind 配置 |

---

## React Native (Expo) 設置

### 1. 創建 Expo 應用

```bash
cd apps
npx create-expo-app native --template blank-typescript
```

### 2. 安裝 NativeWind

```bash
cd native
npm install nativewind tailwindcss
npx tailwindcss init
```

### 3. 配置 NativeWind

```javascript
// apps/native/tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 複製 apps/web/tailwind.config.ts 的主題配置
    },
  },
}
```

### 4. Storage 實現替換

```typescript
// apps/native/src/lib/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  getItem: async (key: string): Promise<string | null> => {
    return AsyncStorage.getItem(key);
  },
  
  setItem: async (key: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(key, value);
  },
  
  removeItem: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },
};
```

---

## 開發命令

```bash
# 在根目錄運行
pnpm dev           # 同時啟動所有 apps
pnpm dev --filter web    # 只啟動 web
pnpm dev --filter native # 只啟動 native

pnpm build         # 構建所有
pnpm lint          # 檢查所有
pnpm type-check    # 類型檢查所有
```

---

## 注意事項

1. **共享代碼不能有平台特定 imports**
   - ❌ `import { View } from 'react-native'`
   - ❌ `import { useNavigate } from 'react-router-dom'`
   - ✅ 純 TypeScript/邏輯代碼

2. **平台特定代碼使用條件 exports**
   ```json
   "exports": {
     "./storage": {
       "react-native": "./src/lib/storage.native.ts",
       "default": "./src/lib/storage.web.ts"
     }
   }
   ```

3. **保持設計系統一致**
   - 兩個平台共用相同的 Tailwind 主題配置
   - 顏色、間距、圓角等保持一致
