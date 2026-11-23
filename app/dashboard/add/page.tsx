"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
useRouter

export default function Add() {
    const [note,setNote] = useState({title:"",description:""})
    const router = useRouter()
    // console.log(note);
    

    const handleAddNote=async()=>{

        const {title,description}=note
        if(title && description){
            const res = await fetch(`/api/note` ,{
                method:'POST',
                body:JSON.stringify(note)
            })
            const response = await res.json()
            // console.log(response);

            if(res.status==201){
                toast.success(response.message)
                setNote({title:"",description:""})
                router.push('/dashboard')
            }
            
        }
        else{
            toast.error("enter title and description")
        }
    }
    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

    <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg border border-gray-200">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
            Add New Note
        </h1>

        <p className="text-gray-500 text-center mb-8">
            Create and save your notes
        </p>

        {/* Form */}
        <form className="space-y-5">

            {/* Title */}
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Note Title
                </label>

                <input
                    value={note.title}
                    onChange={(e)=>setNote({...note,title:e.target.value})}
                    type="text"
                    placeholder="Enter note title"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Description
                </label>

                <textarea
                    value={note.description}
                    onChange={(e)=>setNote({...note,description:e.target.value})}
                    placeholder="Write your note here..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">

                <button
                    type="button"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    onClick={handleAddNote}
                >
                    Save Note
                </button>

                <Link
                    href={"/dashboard"}
                    className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition"
                >
                    Cancel
                </Link>

            </div>

        </form>
    </div>
</div>
    )
}