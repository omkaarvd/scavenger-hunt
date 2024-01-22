import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
  teams: [
    {
      name: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
  winner: {
    type: String,
    default: null,
  },
});

const Leaderboard =
  mongoose.models.leaderboards ||
  mongoose.model('leaderboards', leaderboardSchema);

export default Leaderboard;
