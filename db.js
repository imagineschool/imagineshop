import mongoose from 'mongoose';

const url = process.env.MONGODB_URL;
mongoose.connect(url);

export default mongoose;