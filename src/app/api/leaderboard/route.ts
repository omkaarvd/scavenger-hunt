import { connectDB } from '@/db';
import Leaderboard from '@/db/model';

export async function PUT(request: Request) {
  connectDB();

  const { team_name, level } = await request.json();

  const countScore = Math.floor((parseInt(level) / 6) * 100);

  try {
    const teamData = await Leaderboard.findOne({
      _id: '65ae7bfcde758bdca1c5c1f6',
    });

    const isTeamAlreadyExists = teamData.teams.find(
      (team: { name: string }) => team.name === team_name
    );

    if (!isTeamAlreadyExists) {
      await Leaderboard.findOneAndUpdate(
        { _id: '65ae7bfcde758bdca1c5c1f6' },
        { $push: { teams: { name: team_name, score: countScore } } },
        { new: true }
      );
      return Response.json({ status: 'success' });
    }

    await Leaderboard.findOneAndUpdate(
      {
        _id: '65ae7bfcde758bdca1c5c1f6',
        'teams.name': team_name,
      },
      {
        $set: { 'teams.$.score': countScore },
      },
      {
        new: true,
      }
    );

    if (level === '6' && countScore === 100 && !teamData.winner) {
      await Leaderboard.findOneAndUpdate(
        { _id: '65ae7bfcde758bdca1c5c1f6' },
        { $set: { winner: team_name } },
        { new: true }
      );
    }

    return Response.json({ status: 'success' });
  } catch (error) {
    return Response.json({ status: 'error', error });
  }
}

export async function GET() {
  connectDB();

  try {
    const data = await Leaderboard.findOne({
      _id: '65ae7bfcde758bdca1c5c1f6',
    });

    return Response.json({ status: 'success', data });
  } catch (error) {
    return Response.json({ status: 'error', error });
  }
}
