import mongoose from 'mongoose';
const DB_NAME = 'leaderboard';
const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log('\nMONGODB connected!!!');
  } catch (error) {
    console.log('MONGODB connection FAILED ', error);
    process.exit(0);
  }
};
