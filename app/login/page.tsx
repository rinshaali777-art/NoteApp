"use client"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"


export default function Login() {

    const [userDetails, setUserDetails] = useState({ email: "", password: "" })
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const { email, password } = userDetails
        if (email && password) {
            await signIn("credentials", {
                email, password, callbackUrl: '/dashboard'
            })

        }
        else {
            toast.error("please fill the form completely")
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-300 p-5 rounded w-100">
                <h1 className="text-blue-700 font-bold text-center text-4xl">Note Hub</h1>
                <p className="text-white font-bold text-center text-2xl mt-2" >Login</p>
                <form onSubmit={handleLogin}>
                    <div className="my-3 w-full">
                        <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className="my-3 w-full">
                        <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className="my-5 w-full text-center">
                        <button type="submit" className="bg-blue-800 p-2 text-white rounded w-full">Login</button>
                        <p className="mt-3">New user, click here to <Link href={'/register'} className="text-blue-900 underline">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}