import Image from 'next/image';

export default function Page() {
  return (
    <main className='m-4'>
      <h1 className='py-4 text-center text-2xl font-bold'>
        Welcome to the Ultimate Scavenger Hunt!
      </h1>
      <Image
        src='/scavenger.png'
        width={500}
        height={500}
        alt='Scavenger Hunt'
        className='h-full w-full object-cover object-center'
        priority={true}
      />
    </main>
  );
}
