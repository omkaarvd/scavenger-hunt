import Image from 'next/image';

export default function Error() {
  return (
    <div className='mx-6 my-12 flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Clue</h1>
      <h3 className='text-lg font-bold text-red-500'>Not found</h3>
      <Image
        alt='Failure GIF'
        src='/lol.gif'
        priority={true}
        width={500}
        height={500}
        className='my-8'
      />
      <h4 className='font-semibold'>Scan again and try again!</h4>
    </div>
  );
}
