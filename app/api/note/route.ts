import { connectDB } from "@/lib/mongodb"
import notes from '@/models/noteModel'
import { NextRequest, NextResponse } from "next/server"

export async function POST (req:NextRequest){
    try{
        await connectDB()
        const body = await req.json()
        const newNote = await notes.create(body)
        return NextResponse.json({message:"note added successfully",data:newNote},{status:201})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"something went wrong",data:{}},{status:500})
    }
}

export async function GET (req:NextRequest){

    try{
        await connectDB()
        const allNotes = await notes.find()
        return NextResponse.json({message:"all notes" ,data:allNotes} ,{status:200})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"something went wrong",data:{}},{status:400})
    }
}
