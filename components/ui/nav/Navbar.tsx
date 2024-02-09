import Link from 'next/link'
import React from 'react'
import { Button } from '../button'
import { FaGithub } from "react-icons/fa";
import LoginForm from './LoginForm';

export default function Navbar() {
   
  return (
    <nav className='flex items-center justify-between'>
        <div className='group'>
        <Link href="/" className='font-bold text-2xl'> DailyBlog</Link>

        <div className='w-0 h-1 group-hover:w-full translate-all bg-green-500'></div>
        </div>
        <LoginForm/>
    </nav>
  )
}
