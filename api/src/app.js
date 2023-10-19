import express from 'express';
import dotenv from 'dotenv';
import { authRoute } from './routes/auth.route.js';
import { connectToDB } from './config/database.js';

const app = express()

/** CONFIGURATION ENV */
dotenv.config();

/** SET MiDDLEWARES */
app.use(express.json())

/**CONNECT TO DATABASE */
connectToDB();

/** CONNECT TO SERVER */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
})


/** ROUTES */
app.use('/api/v1/auth', authRoute);