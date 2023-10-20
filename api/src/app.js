import express from 'express';
import dotenv from 'dotenv';
import { authRoute } from './routes/auth.route.js';
import { connectToDB } from './config/database.js';
import { userRoute } from './routes/user.route.js';
import cookieParser from 'cookie-parser';

import cors from 'cors'
const app = express()

/** CONFIGURATION ENV */
dotenv.config();

/** SET MiDDLEWARES */
app.use(express.json())
app.use(cors());
app.use(cookieParser());
/**CONNECT TO DATABASE */
connectToDB();

/** CONNECT TO SERVER */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})


/** ROUTES */
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);