import { unstable_noStore as noStore } from 'next/cache';

const getData = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/leaderboard');
  const data = await res.json();
  return data;
};

export default async function Page() {
  noStore();

  const { data } = await getData();

  function formatTime(timestamp: string): string {
    const time = new Date(timestamp);
  
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
    };
  
    return time.toLocaleString('en-IN', options);
  }

  const sortedTeams = data.teams.sort((a: { name: string; score: number; updatedAt: string }, b: { name: string; score: number; updatedAt: string }) => {
    // First, compare by score in descending order
    if (b.score !== a.score) {
      return b.score - a.score;
    }
  
    // If scores are equal, compare by updatedAt in descending order
    const timeA = new Date(a.updatedAt).getTime();
    const timeB = new Date(b.updatedAt).getTime();
    return timeB - timeA;
  });

  return (
    <div className='flex min-h-screen flex-col items-center bg-white py-2'>
      <h1 className='mb-4 text-2xl font-bold'>Leaderboard</h1>
      {data.winner && <h2 className='mb-2 text-xl'>Winner: {data.winner}</h2>}
      <div className='overflow-x-auto'>
        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                Team Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                Score
              </th>
              <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                Done at
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white text-base text-black'>
            {sortedTeams.map((team: { name: string; score: number, updatedAt: string }) => (
              <tr key={team.name}>
                <td className='whitespace-nowrap px-6 py-4'>{team.name}</td>
                <td className='whitespace-nowrap px-6 py-4'>{`${team.score}%`}</td>
                <td className='whitespace-nowrap px-6 py-4'>{`${formatTime(team.updatedAt)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
