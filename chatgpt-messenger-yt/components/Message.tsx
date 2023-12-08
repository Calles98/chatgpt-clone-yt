import { DocumentData } from 'firebase-admin/firestore';
import Image from 'next/image';
import React from 'react';

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === 'ChatGPT';

  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <Image
          src={message.user.avatar}
          alt="Profile Picture"
          height={35}
          width={35}
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
