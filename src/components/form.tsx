import { onFormSubmit } from '@/actions/form-actions';
import BasicInput from './basic-input';
import SubmitButton from './submit-button';

export default function Form({ id }: { id: string }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onFormSubmit(formData, id);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <BasicInput
        type='text'
        label='Team Name'
        name='team_name'
        placeholder='Team Name'
        required={true}
      />
      <BasicInput
        type='text'
        label='Code'
        name='team_code'
        placeholder='Code'
        required={true}
      />
      <SubmitButton />
    </form>
  );
}
