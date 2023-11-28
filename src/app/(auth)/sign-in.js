'use client'
import React from 'react'
import { useState } from 'react'
import Client from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
const SignIn = () => {
const [email,setEmail] = useState('');
const [password,setPassword] =useState('');
const [error,setError] = useState(null);
const router = useRouter();
const handleSubmit = async () => {


    try {
        const {data,error} = await Client.auth.signUp({email:email,password:password})
        if(error){
            throw new Error('error creating your account',error)
        }else{
            router.push('/dashboar')
        }
    } catch (error) {   
            setError(error.message)
    }   
}
  return (
    <div className=''>
            <div
  class="block max-w-sm bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <form>
    <Card className='p-4 container mx-auto'>
        <CardTitle className='p-2 text-center mx-auto'>Sign up</CardTitle>
        <CardHeader>Create your account to use "Buy" and "add to kart"</CardHeader>
        {error&& <div className='text-red-400'>Error creating your account</div>}
    <div class="relative mb-12" data-te-input-wrapper-init>
      <input
        type="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border bg-zinc-100"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <label
        for="exampleInputEmail1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email address</label>
      <small
        id="emailHelp"
        class="absolute w-full text-neutral-500 dark:text-neutral-200"
        data-te-input-helper-ref
        >You can directly create account by input valid email and password.</small>
    </div>

    <div class="relative mb-6" data-te-input-wrapper-init>
      <input
        type="password"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border bg-zinc-100"
        id="exampleInputPassword1"
        placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <label
        for="exampleInputPassword1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Password</label>
    </div>

 


    <button
      type="submit"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light" onClick={handleSubmit}>
      Submit
    </button>
    </Card>
  </form>
</div>
    </div>
  )
}

export default SignIn
