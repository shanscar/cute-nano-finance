// @platform: web
// Conversion: Drawer → Native Modal/BottomSheet
import { useState, useEffect } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ChoiceChip } from './ChoiceChip';
import { IndustryWithSubCategories } from '@/config/onboarding';
import { IndustrySelection } from '@/types/onboarding';

interface SubCategorySheetProps {
  industry: IndustryWithSubCategories | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentSelection: IndustrySelection | undefined;
  onConfirm: (selection: IndustrySelection | null) => void;
}

export const SubCategorySheet = ({
  industry,
  open,
  onOpenChange,
  currentSelection,
  onConfirm,
}: SubCategorySheetProps) => {
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [customInput, setCustomInput] = useState('');

  // Reset state when industry changes or sheet opens
  useEffect(() => {
    if (open && industry) {
      setSelectedSubs(currentSelection?.subCategories || []);
      setCustomInput(currentSelection?.customInput || '');
      setShowOtherInput(!!currentSelection?.customInput);
    }
  }, [open, industry, currentSelection]);

  if (!industry) return null;

  const isOtherOnly = industry.subCategories.length === 0;
  const hasSubCategories = industry.subCategories.length > 0;

  const toggleSubCategory = (value: string) => {
    setSelectedSubs((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleOther = () => {
    if (showOtherInput) {
      setShowOtherInput(false);
      setCustomInput('');
    } else {
      setShowOtherInput(true);
    }
  };

  const handleConfirm = () => {
    const hasSelection = selectedSubs.length > 0 || customInput.trim() !== '';
    
    if (hasSelection) {
      onConfirm({
        category: industry.value,
        subCategories: selectedSubs,
        customInput: customInput.trim() || undefined,
      });
    } else {
      // Remove this industry if nothing selected
      onConfirm(null);
    }
    onOpenChange(false);
  };

  const totalSelected = selectedSubs.length + (customInput.trim() ? 1 : 0);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex items-center gap-2 text-xl">
            <span>{industry.icon}</span>
            <span>{industry.label}</span>
          </DrawerTitle>
        </DrawerHeader>

        <div className="px-4 pb-4 overflow-y-auto">
          {/* Sub-category chips */}
          {hasSubCategories && (
            <div className="flex flex-wrap gap-2 mb-4">
              {industry.subCategories.map((sub) => (
                <ChoiceChip
                  key={sub.value}
                  label={sub.label}
                  isSelected={selectedSubs.includes(sub.value)}
                  onClick={() => toggleSubCategory(sub.value)}
                />
              ))}
              
              {/* Other chip for industries with sub-categories */}
              <ChoiceChip
                label="其他"
                isSelected={showOtherInput}
                onClick={toggleOther}
                variant="other"
              />
            </div>
          )}

          {/* Other input - shown for "other" industry or when "other" chip is selected */}
          {(isOtherOnly || showOtherInput) && (
            <div className="mt-4 animate-in slide-in-from-top-2 duration-200">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={isOtherOnly ? '請輸入你的行業類別...' : '請描述你的具體業務...'}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                autoFocus={isOtherOnly}
              />
            </div>
          )}
        </div>

        <DrawerFooter>
          <Button onClick={handleConfirm} className="w-full" size="lg">
            確認 {totalSelected > 0 && `(${totalSelected})`}
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost" className="w-full">
              取消
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
