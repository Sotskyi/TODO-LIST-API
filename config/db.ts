import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
  
      console.log(`MongoDB Connected`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
