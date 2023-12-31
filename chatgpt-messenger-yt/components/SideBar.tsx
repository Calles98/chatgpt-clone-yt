'use client';

import React from 'react';
import NewChat from './NewChat';
import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc'),
      ),
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* NewChat */}
        <NewChat />
        <div className="sm:inline hidden my-2">
          {/** ModalSelection */}
          <ModelSelection />
        </div>
        {/* Map Through the ChatRows */}
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="user image"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto
            mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
