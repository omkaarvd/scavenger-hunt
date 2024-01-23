import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

const leaderboardSchema = new mongoose.Schema({
  teams: [teamSchema],
  winner: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

const Leaderboard =
  mongoose.models.leaderboards ||
  mongoose.model('leaderboards', leaderboardSchema);

export default Leaderboard;
