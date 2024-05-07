"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


const RegisterPage = () => {
  const[email,setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[userCreated, setUserCreated] = useState(false);
  const[creatingUser, setCreatingUSer] = useState(false);
  async function handleFormSubmit(ev){
    ev.preventDefault();
    setCreatingUSer(true);
    await fetch('/api/register', {method: "POST", body:JSON.stringify({email,password}),headers:{'Content-Type': 'application/json'}});
    setCreatingUSer(false)
    setUserCreated(true)
  }
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
        {userCreated && (<div className='my-4 text-center'>User created.<br/>
         Now you  can 
         <Link href={'/login'}>Login &raquo</Link> </div>)}
        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
            <input type='email' placeholder='email' value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)}/>
            <input type='password' placeholder='password' value={password} disabled={creatingUser} onChange={ev => setPassword(ev.target.value)}/>
            <button type='submit' disabled={creatingUser}>Register</button>
            <div className='my-4 text-center text-gray-500'> or Login with provider</div>
            <button className='flex gap-4 justify-center items-center'>
                <Image src={"/google.png"} alt={''} width={24} height={24} />
                Login with Google
                </button>
        </form>
        
    </section>
  )
}

export default RegisterPage