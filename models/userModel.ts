import mongoose, { model } from 'mongoose'

interface user{
    name:string
    email:string
    password:string
}

const userSchema = new mongoose.Schema<user>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

export default mongoose.models.users || mongoose.model<user>("users",userSchema)