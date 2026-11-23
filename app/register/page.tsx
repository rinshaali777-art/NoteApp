"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"



export default function Home() { 

    const router = useRouter() 
    const [userDetails,setUserDetails] = useState({
        name:"",email:"",password:""
    })
    // console.log(userDetails);

    const handleRegister=async (e:any)=>{
        e.preventDefault()
        const {name,email,password} = userDetails
        if(!name || !email || !password){
            toast.error("please fill the form completely")
        }
        else{
            const res = await fetch('/api/register',{
                method:"POST",
                body:JSON.stringify(userDetails)
                
                
            })
           const serverResponse = await res.json()
           console.log(res);
           
           if(res.status==201){
            toast.success(serverResponse.message)
            router.push('/login')
           }
           else{
            toast.error(serverResponse.message)
           }
           setUserDetails({ name:"",email:"",password:""})
        }
        
    }
    
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="bg-blue-300 p-5 rounded w-100">
            <h1 className="text-blue-700 font-bold text-center text-4xl">Note Hub</h1>
            <p className="text-white font-bold text-center text-2xl mt-2" >Register</p>
            <form onSubmit={handleRegister}>
                <div className="my-3 w-full">
                    <input value={userDetails.name} onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})} type="text" placeholder="User name"  className="rounded bg-gray-100 p-3 w-full"/>
                </div>
                <div className="my-3 w-full">
                    <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full"/>
                </div>
                <div className="my-3 w-full">
                    <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                </div>
                <div className="my-5 w-full text-center">
                    <button type="submit" className="bg-blue-800 p-2 text-white rounded w-full">Register</button>
                    <p className="mt-3">Already a user,click here to <Link href={'/login'} className="text-blue-900 underline">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )}