import { connectDB } from "@/lib/mongodb"
import notes from '@/models/noteModel'
import { NextRequest, NextResponse } from "next/server"

export async function GET (req:NextRequest,{params}:{params:Promise<{id:string}>}){

   try{
     const {id} = await params
    const noteDetails=await notes.findById({_id:id})
     return NextResponse.json({message:"note details",data:noteDetails},{status:200})
   }
   catch(err){
    return NextResponse.json({message:"something went wrong",data:{}},{status:500})
   }
}

export async function PUT (req:NextRequest,{params}:{params:Promise<{id:string}>}){

   try{
    const {id} = await params
    const body= await req.json()
    const updateNote = await notes.findByIdAndUpdate({_id:id},body,{new:true})
    return NextResponse.json({message:"note Updated successfully",data:{updateNote}},{status:200})
   }
   catch(err){
    console.log(err);
    
    return NextResponse.json({message:"something went wrong",data:{}},{status:500})
   }
}

export async function DELETE (req:NextRequest,{params}:{params:Promise<{id:string}>}){

   try{
    const {id} = await params
    const dltNote = await notes.findByIdAndDelete({_id:id})
    return NextResponse.json({message:"note Updated successfully",data:{dltNote}},{status:200})
   }
   catch(err){
    console.log(err);
    return NextResponse.json({message:"something went wrong",data:{}},{status:500})
   }
}