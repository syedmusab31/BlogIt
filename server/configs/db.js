import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Ensure the MONGODB_URI is set in the environment variables
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected');
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/blogit`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
export default connectDB;