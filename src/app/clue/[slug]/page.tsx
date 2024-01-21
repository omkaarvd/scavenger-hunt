'use client';

import Form from '@/component/form';

type ParamsType = { params: { slug: string } };

export default function Page() {
  return (
    <div className='m-4'>
      <div className='my-8'>Hint: </div>
      <Form />
    </div>
  );
}
