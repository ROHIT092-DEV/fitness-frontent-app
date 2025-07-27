'use client'
import { AuthContext } from "@/context/AuthContext";
import { File, Home, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react"


function Admin() {

  const {user} = useContext(AuthContext);
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
      </div>
    );
  }



  return (
  
    <></>
  )
}

export default Admin