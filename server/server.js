import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import path from 'path';
import serverless from "serverless-http";


const app = express();  
// Serve static files from the "public" directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));


//db connection
await connectDB();

//middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
app.use(express.json());


const PORT=process.env.PORT || 5000;

//routes
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/',(req,res)=> res.send("Hello World"));
app.use('/api/admin', adminRouter);
app.use('/api/blog',blogRouter)

// Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

export const handler = serverless(app);