import mongoose from 'mongoose';

if (!process.env.MONGO_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGO_URI"')
}

const uri = process.env.MONGO_URI

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;