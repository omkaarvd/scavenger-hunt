import { cn } from '@/utils/cn';

interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  name: string;
  placeholder: string;
  value?: string;
  labelClass?: string;
  inputClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicInput({
  label,
  type,
  name,
  value,
  labelClass,
  inputClass,
  onChange,
  placeholder,
}: BasicInputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className={cn('block text-sm font-medium', labelClass)}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        autoComplete='off'
        className={cn('block w-full p-2 text-black', inputClass)}
      />
    </>
  );
}
