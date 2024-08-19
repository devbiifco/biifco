import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true, // Puedes mantener otras opciones necesarias aquí
    } as mongoose.ConnectOptions);

    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
