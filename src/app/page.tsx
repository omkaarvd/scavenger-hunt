import Image from 'next/image';

export default function Page() {
  return (
    <main className='p-4'>
      <h1 className='py-4 text-center text-2xl font-bold'>
        Welcome to the Ultimate Scavenger Hunt!
      </h1>
      <Image
        src='https://res.cloudinary.com/omkardate/image/upload/v1705478530/cesa/event/ongoing/scavenger/main.jpg'
        width={500}
        height={500}
        alt='Scavenger Hunt'
        className='h-full w-full object-cover object-center'
        priority={true}
      />
    </main>
  );
}
