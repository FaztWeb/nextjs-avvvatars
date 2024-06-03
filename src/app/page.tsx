"use client";
import Avvvatars from "avvvatars-react";
import { useState } from "react";

export default function HomePage() {
  const [nickname, setNickname] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-2 items-center justify-center">
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          className="text-black"
        />
        <Avvvatars
          value={nickname}
          style="shape"
          size={64}
          shadow
          // radius={10}
          // border
          // borderSize={3}
          // borderColor="#ffeaa7"
        />
      </div>
    </div>
  );
}
