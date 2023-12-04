"use client" 

import React from 'react'
import NewChat from './NewChat'
import { signOut, useSession } from 'next-auth/react'

function SideBar() {

  const { data: session } = useSession();

  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            {/* NewChat */}
            <NewChat />
            <div>
                {/** ModalSelection */}
            </div>
            {/* Map Through the ChatRows */}
        </div>

        {session && 
          <img onClick={() => signOut()} 
          src={session.user?.image!} 
          alt="user image" 
          className='h-12 w-12 rounded-full cursor-pointer mx-auto
          mb-2 hover:opacity-50' />}
    </div>
  )
}

export default SideBar