'use client';

import Form from '@/components/form';

type ParamsType = { params: { slug: string } };

export default function Page({ params: { slug } }: ParamsType) {
  return (
    <div className='mx-6 my-8'>
      <Form id={slug} />
    </div>
  );
}
