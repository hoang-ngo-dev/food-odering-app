import { Schema, model } from "mongoose";
import { type } from "os";

const UserSchema = new Schema({
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true, validate:pass =>{
        if(pass?.length || pass.length < 5){
            new Error('password must be least 5 characters')
        }
    },}
},{timestamps:true});

export const User = model?.USer || model('User',UserSchema)