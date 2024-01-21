import { redirect } from 'next/navigation';

export const onFormSubmit = (data: FormData) => {
  const name = data.get('team_name');
  const code = data.get('team_code');

  redirect(`/clue/${name}-${code}`);
};
