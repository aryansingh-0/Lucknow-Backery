// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/lucknow-bakers';

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI');

let cached = global.mongoose || { conn: null, promise: null };

async function connectMongoDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      // No need to pass useNewUrlParser or useUnifiedTopology anymore
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongoDB;
