import mongoose from 'mongoose';
export const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to Mongodb");
    })
    .catch((error) => {
      console.log(`DB Connection Error ${error.message}`)
    })
}