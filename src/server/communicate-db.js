import { connectDB } from './connect-db'

export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
};

export const updateTask = async task=>{
    let {_id,status,name, description, ETA} = task;
    var ObjectID = require('mongodb').ObjectID;
    _id = ObjectID(_id);
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    if (status) {
        await collection.updateOne({_id},{$set:{status}});
    }
    if (name) {
        await collection.updateOne({_id},{$set:{name}});
    }
    if (description) {
        await collection.updateOne({_id},{$set:{description}});
    }
    if (ETA) {
        await collection.updateOne({_id},{$set:{ETA}});
    }
};

export const getTasks = async () => {
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    return await collection.find().toArray();
};