"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { DELETE } from "../api/note/[id]/route"
import Header from "../components/Header"

interface Note{
    title:string,
    description:string,
    _id :string
}

export default function Dashboard() {

    const [notes,setNotes] = useState<Note[]>([])
    // console.log(notes);

    useEffect(()=>{
        fetchNote()
    },[])
    
    const fetchNote = async()=>{
        const res = await fetch(`/api/note`)
        const response = await res.json()
        setNotes(response.data)
    }

    const dltNote = async (id:string)=>{
        const res= await fetch(`/api/note/${id}` ,{
            method:'DELETE'
        })
        if(res.status==200){
            fetchNote()
        }
    }

    return(
<>  
    <Header/>    
     <div className="min-h-screen bg-gray-50 px-6 py-10">

    {/* Header */}
    <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">
                    My <span className="text-blue-600">Notes</span>
                </h1>
                <p className="text-gray-500 mt-2">
                    Organize your thoughts and ideas in one place.
                </p>
            </div>

            <Link
                href={"/dashboard/add"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
                + Add New Note
            </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Note Card */}
            {
                notes?.length > 0 ?
                notes?.map((note:Note)=>(
                    <div key={note?.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {note?.title}
                </h2>

                <p className="text-gray-500 text-sm leading-6 line-clamp-4">
                    {note?.description}
                </p>

                <div className="border-t border-gray-100 mt-5 pt-4 flex items-center justify-between">

                    <Link href={`/dashboard/${note?._id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl -600 bg-blue-50 hover:bg-blue-100 transition font-medium"
                    >
                         Edit
                    </Link>

                    <button
                        onClick={()=>dltNote(note?._id)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition font-medium"
                    >
                         Delete
                    </button>

                </div>
                    </div>
                ))
                :
                <p>no note added yet</p>
            }

        </div>
    </div>
</div>
</>
    )
}