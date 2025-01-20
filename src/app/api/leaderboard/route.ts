import { connectDB } from '@/db';
import Leaderboard from '@/db/model';

connectDB();

export async function PUT(request: Request) {
  const { team_name, level } = await request.json();

  const countScore = Math.floor((parseInt(level) / 6) * 100);

  try {
    const teamData = await Leaderboard.findOne({
      _id: '678e0a3be2d9cf9a94ad32f9',
    });

    const isTeamAlreadyExists = teamData.teams.find(
      (team: { name: string }) => team.name === team_name
    );

    if (!isTeamAlreadyExists) {
      await Leaderboard.findOneAndUpdate(
        { _id: '678e0a3be2d9cf9a94ad32f9' },
        { $push: { teams: { name: team_name, score: countScore } } },
        { new: true }
      );
      return Response.json({ status: 'success' });
    }

    await Leaderboard.findOneAndUpdate(
      {
        _id: '678e0a3be2d9cf9a94ad32f9',
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
        { _id: '678e0a3be2d9cf9a94ad32f9' },
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
  try {
    const data = await Leaderboard.findOne({
      _id: '678e0a3be2d9cf9a94ad32f9',
    });

    console.log({ data });

    return Response.json({ status: 'success', data });
  } catch (error) {
    return Response.json({ status: 'error', error });
  }
}
