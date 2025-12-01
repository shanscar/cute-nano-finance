# React → React Native (NativeWind) 轉換指南

本指南幫助開發者將現有 React Web 代碼轉換為 React Native + NativeWind。

---

## 文件標記系統

每個文件頂部都有 `@platform` 標記：

| 標記 | 含義 | 轉換工作量 |
|------|------|-----------|
| `@platform: shared` | 100% 可共享 | 直接複製 |
| `@platform: adaptable` | 需要少量調整 | 改 import/API |
| `@platform: web` | 需要轉換 | UI 重寫 |

---

## 共享代碼（直接複製）

以下文件可以直接搬入 `packages/shared/`：

```
src/types/**           - TypeScript 類型定義
src/config/**          - 配置數據（行業、步驟等）
src/lib/utils.ts       - cn() 函數（NativeWind 相容）
src/lib/storage.ts     - Storage 抽象層
```

---

## 需要適配的代碼

### Contexts
- `src/contexts/**` 
- 主要改動：`import { storage } from '@/lib/storage'` 已抽象化
- React Native 版本只需替換 `storage.ts` 實現

### Hooks  
- `src/hooks/**`
- 檢查是否有 Web-specific APIs（如 `window`、`document`）
- 大部分 hooks 可直接使用

---

## 需要轉換的代碼（UI）

### Components
```
src/components/**      → apps/native/src/components/
```

### Pages → Screens
```
src/pages/**           → apps/native/src/screens/
```

---

## 元素對照表

| Web (React) | Native (NativeWind) | 備註 |
|-------------|---------------------|------|
| `<div>` | `<View>` | 容器元素 |
| `<span>`, `<p>` | `<Text>` | 所有文字必須包在 Text 內 |
| `<button>` | `<Pressable>` | 或 `<TouchableOpacity>` |
| `<img>` | `<Image>` | 需要 `source={{ uri: '...' }}` |
| `<input>` | `<TextInput>` | |
| `<a>` | `<Link>` (expo-router) | 或 `<Pressable>` + navigation |
| `onClick` | `onPress` | |
| `onChange` | `onChangeText` | TextInput 專用 |
| `className` | `className` | NativeWind 支援！ |
| `style={{}}` | `style={{}}` | 相同 |

---

## Tailwind 類別支援

### ✅ 完全支援（直接可用）

```
// Layout
flex, flex-row, flex-col, items-center, justify-between, gap-4

// Spacing  
p-4, px-6, py-2, m-2, mx-auto, mt-8

// Sizing
w-full, h-12, w-14, min-h-screen

// Colors (透過設計系統)
bg-primary, bg-background, text-foreground, border-border

// Border & Radius
rounded-xl, rounded-full, border-4, border-black

// Typography
text-lg, font-semibold, text-center
```

### ⚠️ 需要注意

| Web | Native 替代方案 |
|-----|-----------------|
| `hover:` | `active:` 或移除 |
| `shadow-[custom]` | 使用預設 shadow 或 StyleSheet |
| `cursor-pointer` | 移除（無意義） |
| `overflow-hidden` | 某些情況可能不同 |
| CSS Grid | 使用 Flexbox |

### ❌ 不支援

- `hover:*` 前綴（觸屏無 hover）
- 部分 CSS 屬性（如 `box-shadow` 自定義值）
- CSS Grid（使用 Flexbox 代替）

---

## Storage API 對照

本項目已使用抽象層 `src/lib/storage.ts`：

| 方法 | Web 實現 | Native 實現 |
|------|----------|-------------|
| `storage.getItem(key)` | `localStorage.getItem` | `AsyncStorage.getItem` |
| `storage.setItem(key, value)` | `localStorage.setItem` | `AsyncStorage.setItem` |
| `storage.removeItem(key)` | `localStorage.removeItem` | `AsyncStorage.removeItem` |

轉換時只需替換 `src/lib/storage.ts` 的實現。

---

## 路由對照

| Web (react-router-dom) | Native (expo-router) |
|------------------------|----------------------|
| `useNavigate()` | `useRouter()` |
| `navigate('/')` | `router.push('/')` |
| `navigate(-1)` | `router.back()` |
| `<Link to="/">` | `<Link href="/">` |
| `useParams()` | `useLocalSearchParams()` |

---

## 轉換步驟

1. **搜索 `@platform: shared`** - 直接複製到 `packages/shared/`
2. **搜索 `@platform: adaptable`** - 檢查並調整 imports
3. **搜索 `@platform: web`** - 使用 Dualite 或手動轉換 UI

---

## Dualite 使用建議

1. 在 Figma 中設計 Native UI（或導入現有設計）
2. 使用 Dualite 生成 React Native 組件
3. 將生成的組件放入 `apps/native/src/components/`
4. 連接 `packages/shared/` 的邏輯和類型

---

## 常見問題

### Q: NativeWind 的 `cn()` 函數可以用嗎？
A: 可以！`clsx` + `tailwind-merge` 在 NativeWind 完全相容。

### Q: Shadcn/UI 組件怎麼辦？
A: 需要用 React Native 版本替代，如：
- `react-native-paper`
- `tamagui`
- `gluestack-ui`

### Q: 動畫怎麼處理？
A: 
- 簡單動畫：`react-native-reanimated`
- 複雜動畫：`lottie-react-native`
