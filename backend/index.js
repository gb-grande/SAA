import express from 'express';
import mongoose from 'mongoose';

const app = express();

const uri = "";

async function connect(){
    try{
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }catch(error){
        console.error(error);
    }
}

connect();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
