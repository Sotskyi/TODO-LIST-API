import express,{Application} from 'express';
import dotenv  from 'dotenv';
import {connectDB} from '../config/db'
import {todoRoutes} from '../routes/todoRoutes';

dotenv.config({path:'./config/config.env'})

connectDB()

const app : Application =express();

app.use(express.json());

app.use('/api', todoRoutes);

app.listen(5000,()=>console.log(`server run` ))
