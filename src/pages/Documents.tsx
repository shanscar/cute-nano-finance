// @platform: web
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Trash2, Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GRADIENTS } from '@/config/theme';
import { cn } from '@/lib/utils';

interface DocumentUpload {
  id: string;
  name: string;
  file: File | null;
}

interface DocumentType {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const DOCUMENT_TYPES: DocumentType[] = [
  {
    id: 'br_certificate',
    emoji: '📜',
    title: 'BR 證書',
    description: '報稅、審計、公司資料核實',
  },
  {
    id: 'id_proof',
    emoji: '🪪',
    title: '董事身份證明',
    description: '首次簽署文件前核實身份',
  },
];

const Documents = () => {
  const navigate = useNavigate();
  const [uploads, setUploads] = useState<Record<string, DocumentUpload>>({});

  const handleFileChange = (documentId: string, file: File | null) => {
    if (file) {
      setUploads((prev) => ({
        ...prev,
        [documentId]: {
          id: documentId,
          name: file.name,
          file,
        },
      }));
    }
  };

  const handleRemoveFile = (documentId: string) => {
    setUploads((prev) => {
      const newUploads = { ...prev };
      delete newUploads[documentId];
      return newUploads;
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: GRADIENTS.main }}
    >
      {/* Header */}
      <header className="flex items-center px-6 py-5 border-b-3 border-border">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold pr-8">我的文件</h1>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Intro */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">你嘅公司文件</h2>
            <p className="text-sm text-muted-foreground">
              會計師處理稅務時可能需要呢啲文件
            </p>
          </div>

          {/* Document Upload Cards */}
          {DOCUMENT_TYPES.map((doc) => {
            const upload = uploads[doc.id];
            const hasFile = !!upload?.file;

            return (
              <div
                key={doc.id}
                className={cn(
                  'p-5 rounded-xl border-3 border-border bg-card',
                  'transition-all duration-200'
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{doc.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {doc.description}
                    </p>

                    {hasFile ? (
                      <div className="mt-3 flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/30">
                        <Check className="w-4 h-4 text-success" />
                        <span className="flex-1 text-sm font-medium truncate">
                          {upload.name}
                        </span>
                        <button
                          onClick={() => handleRemoveFile(doc.id)}
                          className="p-1 hover:bg-destructive/10 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    ) : (
                      <label
                        className={cn(
                          'mt-3 flex items-center justify-center gap-2 p-3 rounded-lg',
                          'border-2 border-dashed border-border',
                          'hover:border-primary/50 hover:bg-accent/50',
                          'transition-all duration-200 cursor-pointer'
                        )}
                      >
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          onChange={(e) =>
                            handleFileChange(doc.id, e.target.files?.[0] || null)
                          }
                        />
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          點擊上傳
                        </span>
                      </label>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Security Note */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
            <Lock className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">
                文件經加密儲存，只供你嘅專屬會計師查閱
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;