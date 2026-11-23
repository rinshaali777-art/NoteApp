"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"


export default function Header() {

    const handleLogout = async()=>{
        await signOut({
            callbackUrl :'/login'
        })
    }
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                    <div className="flex items-center gap-5">
                        <img src="https://cdn-icons-png.flaticon.com/512/14591/14591773.png" alt="NoteHub" width={'60'}  height={'60'}/>

                    <h1 className="text-2xl font-bold text-gray-800">
                        Note<span className="text-blue-600">Hub</span>
                    </h1>
                    </div>
                

                {/* Navigation */}
                <nav className="flex items-center gap-6">

                    <Link
                        href="/dashboard"
                        className="text-gray-600 hover:text-blue-600 font-medium transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href={"/dashboard/add"}
                        className="text-gray-600 hover:text-blue-600 font-medium transition"
                    >
                        Add
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md shadow-blue-100 transition"
                    >
                        Logout
                    </button>

                </nav>

            </div>
        </header>
    )
}