'use client';

import Form from '@/components/form';
import { useEffect } from 'react';

type ParamsType = { params: { slug: string } };

export default function Page({ params: { slug } }: ParamsType) {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className='mx-6 my-8'>
      <Form id={slug} />
    </div>
  );
}
