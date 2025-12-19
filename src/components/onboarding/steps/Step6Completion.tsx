// @platform: web
// Conversion: Full step → Native screen
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, FileText, Mail } from 'lucide-react';
import { OnboardingLayout } from '../OnboardingLayout';
import { SuccessAnimation } from '../SuccessAnimation';
import { useOnboarding } from '@/hooks/use-onboarding';
import { ONBOARDING_MESSAGES } from '@/config/onboarding';

interface UploadedFile {
  name: string;
  size: number;
}

export const Step6Completion = () => {
  const { completeOnboarding } = useOnboarding();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleComplete = () => {
    completeOnboarding();
    navigate('/');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      addFiles(files);
    }
  };

  const addFiles = (files: File[]) => {
    const newFiles = files.map(file => ({
      name: file.name,
      size: file.size,
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <OnboardingLayout
      showBackButton={true}
      showNextButton
      nextButtonText={ONBOARDING_MESSAGES.completeButton}
      onNext={handleComplete}
      buttonVariant="success"
    >
      <div className="text-center">
        <SuccessAnimation message={ONBOARDING_MESSAGES.completionMessage} />

        {/* Email Reminder Card */}
        <div className="mt-8 p-5 rounded-xl bg-primary/10 border border-primary/20 text-left">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                {ONBOARDING_MESSAGES.emailReminderTitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {ONBOARDING_MESSAGES.emailReminderDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Optional Upload Section */}
        <div className="mt-6 p-5 rounded-xl bg-muted/50 border border-border text-left">
          <p className="text-sm font-medium text-foreground mb-1">
            {ONBOARDING_MESSAGES.uploadOptionalTitle}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {ONBOARDING_MESSAGES.uploadOptionalDescription}
          </p>

          {/* Drop Zone */}
          <div
            className={`
              relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
              transition-all duration-200
              ${isDragging 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileSelect}
            />
            <Upload className={`w-8 h-8 mx-auto mb-2 ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className="text-sm text-muted-foreground">
              拖放文件到呢度，或點擊上傳
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              支援 PDF、JPG、PNG
            </p>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground truncate max-w-[180px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            {ONBOARDING_MESSAGES.uploadOptionalHint}
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
};
