import mongoose, { model } from 'mongoose'

interface note{
    title:string
    description:string
}

const noteSchema = new mongoose.Schema<note>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.models.notes || mongoose.model<note>("notes",noteSchema)