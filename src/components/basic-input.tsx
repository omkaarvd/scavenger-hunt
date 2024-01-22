import { cn } from '@/utils/cn';

interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  name: string;
  placeholder: string;
  value?: string;
  labelClass?: string;
  inputClass?: string;
  required?: boolean;
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
  required,
}: BasicInputProps) {
  return (
    <div>
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
        className={cn(
          'my-1 block w-full rounded-lg border p-2 text-sm font-medium text-black',
          inputClass
        )}
        required={required}
      />
    </div>
  );
}
