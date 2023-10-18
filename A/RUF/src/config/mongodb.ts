import mongoose, { Connection, ConnectOptions } from 'mongoose';
import { primary_mongodb_uri } from '@/utils/constants';

const options: ConnectOptions = {};

const connection: Connection = mongoose.createConnection(primary_mongodb_uri, options);

connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

export default connection;