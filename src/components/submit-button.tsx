import { cn } from '@/utils/cn';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const data = useFormStatus();

  return (
    <button
      type='submit'
      disabled={data.pending}
      className={cn(
        'my-1 block w-full rounded-lg border border-blue-950 bg-blue-900 p-2 text-center text-sm font-medium hover:bg-blue-950'
      )}
    >
      {data.pending ? 'Wait' : 'Submit'}
    </button>
  );
}
