import bcrypt from 'bcrypt';
import { Schema, model } from "mongoose";
import { type } from "os";

const UserSchema = new Schema({
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true, validate:pass =>{
        if(pass?.length || pass.length < 5){
            new Error('password must be least 5 characters');
            return false;
        }
    },}
},{timestamps:true});

UserSchema.post('validate',function (user){
    const pass = user.password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync("B4c0/\/",salt);
    // user.password = 'hashed';
    // console.log({arguments});
})

export const User = model?.USer || model('User',UserSchema)
