export const updateScore = async (team_name: string, level: string) => {
  const res = await fetch('/api/leaderboard', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ team_name, level }),
  });
  const data = await res.json();
};
