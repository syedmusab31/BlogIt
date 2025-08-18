import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';



const app=express();

//db connection
await connectDB();

//middlewares
app.use(cors());
app.use(express.json());


const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=> res.send("Hello World"));

// Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

export default app;