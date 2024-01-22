'use client';

import Loader from '@/components/loader';
import Error from '@/components/error';
import { useEffect, useState } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [clue, setClue] = useState('');
  const [next_code, setNextCode] = useState('');
  const [group_message, setGroupMessage] = useState('');
  const [team_message, setTeamMessage] = useState('');
  const [team_code_umatched, setTeamCodeUnmatched] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setClue(localStorage.getItem('clue') as string);
    setNextCode(localStorage.getItem('next_code') as string);
    setGroupMessage(localStorage.getItem('group_message') as string);
    setTeamMessage(localStorage.getItem('team_message') as string);
    setTeamCodeUnmatched(localStorage.getItem('team_code_umatched') as string);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!clue || !next_code) {
    // if clue and next_code are not found, then show why not found
    return (
      <>
        <Error />
        {group_message ? (
          <p className='text-center text-red-500'>{group_message}</p>
        ) : null}
        {team_message ? (
          <p className='text-center text-red-500'>{team_message}</p>
        ) : null}
        {team_code_umatched ? (
          <p className='text-center text-red-500'>{team_code_umatched}</p>
        ) : null}
      </>
    );
  }

  return (
    <div className='mx-6 my-12 flex flex-col items-center justify-center gap-24 text-center'>
      <div>
        <h1 className='text-2xl font-bold'>Clue</h1>
        <p className='text-lg'>{clue}</p>
      </div>

      <div>
        <p>Code for next level</p>
        <h3 className='font-bold'>{next_code}</h3>
      </div>
    </div>
  );
}
