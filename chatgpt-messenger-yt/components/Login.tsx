'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

function Login() {
  return (
    <div className="bg-[#74AA9C] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to ChatGPT
      </button>
    </div>
  );
}

export default Login;
