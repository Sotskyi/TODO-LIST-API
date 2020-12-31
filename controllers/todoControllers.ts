import  {  Request, Response, NextFunction } from "express";
import {TodoModel} from '../models/TodoList'

const getList = async(req:Request,res:Response,nex:NextFunction) =>{

    try{
        const todoDescription = await TodoModel.find();

        return res.status(200).json({
            succes:true,
            data:todoDescription
        })
    }
    catch(err){

        return res.status(500).json({
            succes:false,
            error:'Server error'
        })
    }
}

const addTask = async (req:Request,res:Response,nex:NextFunction) =>{
   
   try{

    const todoText = await TodoModel.create(req.body);

    return res.status(201).json({
        succes:true,
        data:todoText
    });
}
catch(err){

    return res.status(500).json({
        succes:false,
        error:'Server error'
    })
}
}


const deleteTask = async (req:Request,res:Response,nex:NextFunction) =>{
   
    try{
       
        const todoText = await TodoModel.findById(req.body);
        if(!todoText){

        return res.status(404).json({
            succes:false,
            error:'No elem found'
        })}
        await todoText.remove();

        return res.status(200).json({
            sucess:true,
            data:{}
        })
    }
    catch(err){
        return res.status(500).json({
            succes:false,
            error:'Server error'
        })
    }
}

export{getList,addTask,deleteTask}