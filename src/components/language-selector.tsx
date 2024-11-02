import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageOption {
  value: string;
  label: string;
}

interface LanguageSelectorProps {
  value: string;
  onChange: (language: string) => void;
  options: LanguageOption[];
}

const LanguageSelector = ({
  value,
  onChange,
  options,
}: LanguageSelectorProps) => {
  // 检查 options 数组是否为空或未定义
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-6 w-auto border-none px-1.5 py-0.5">
        <SelectValue
          placeholder={options[0].label}
          defaultValue={options[0].value}
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
