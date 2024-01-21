import { useFormStatus } from 'react-dom';
import { cn } from '@/utils/cn';
import { onFormSubmit } from '@/actions/form-actions';

export default function Form() {
  return (
    <form action={onFormSubmit} className='flex flex-col gap-4'>
      <div>
        <label htmlFor='team_name' className='block text-sm font-medium'>
          Team Name
        </label>
        <input
          type='text'
          name='team_name'
          placeholder='Team Name'
          id='team_name'
          autoComplete='off'
          className='my-2 block w-full rounded-lg border p-2 text-sm font-medium text-black'
          required
        />
      </div>
      <div>
        <label htmlFor='team_code' className='block text-sm font-medium'>
          Code
        </label>
        <input
          type='text'
          name='team_code'
          placeholder='Code'
          id='team_code'
          autoComplete='off'
          className='my-2 block w-full rounded-lg border p-2 text-sm font-medium text-black'
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const data = useFormStatus();

  return (
    <button
      type='submit'
      disabled={data.pending}
      className={cn(
        'block w-full rounded-lg border border-blue-950 bg-blue-900 p-2 text-center text-sm font-medium hover:bg-blue-950'
      )}
    >
      {data.pending ? 'Wait' : 'Submit'}
    </button>
  );
}
