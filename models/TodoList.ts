import mongoose from 'mongoose';

const TodoListSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please add some text']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const TodoModel = mongoose.model('Todo',TodoListSchema);
export{ TodoModel}