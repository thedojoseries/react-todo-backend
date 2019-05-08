import { MongoClient } from 'mongodb';
import path from 'path';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import './initialize-db';
import { authenticationRoute } from './authenticate'

import { connectDB } from './connect-db'
import { addNewTask, updateTask, getTasks } from './communicate-db';


let port = 7777;
let app = express();



app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);
app.listen(port,console.info("Server running, listening on port ", port));

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname,'../../dist')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve('index.html'));
    });
}

app.post('/task/new',async (req,res)=>{
    try {
        if (req.body && req.body.name && req.body.status){
            await addNewTask(req.body);
            res.status(200).send('success');
        }
        else {
            res.status(400).send('You must submit a TODO with the right parameters');
        }

    } catch (e) {
        console.log(e);
    }
    
});

app.get('/tasks',async (req,res)=>{
    let tasks = await getTasks();
    res.status(200).send(tasks);
});


app.post('/task/update',async (req,res)=>{
    let db = await connectDB();
    if (req.body && req.body._id ){
        const resp = await updateTask(req.body);
        res.status(200).send("Successfully updated");
    }
    else {
        res.status(400).send('You must submit a TODO with the right parameters');
    }
    
    
});

app.post('/comment/new',async (req,res)=>{
    let comment = req.body.comment;
    let db = await connectDB();
    let collection = db.collection(`comments`);
    await collection.insertOne(comment);
    res.status(200).send();
});