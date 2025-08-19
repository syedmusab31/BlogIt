import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';


const app = express();  



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
app.get('/',(req,res)=> res.send("Hello World"));
app.use('/api/admin', adminRouter);
app.use('/api/blog',blogRouter)

// Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

export default app;