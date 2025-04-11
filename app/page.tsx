"use client";

import { useState, useEffect } from "react";
import Splash from "@/components/Splash";

export default function Home() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowIframe(true);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Splash />
      <div className="relative flex justify-center items-start p-4 mt-16">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/4yakWqhAm8fAnNNlngM9r"
          className={`w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-[700px] border-0 rounded-xl shadow-lg transition-opacity duration-[5000ms] ease-in ${
            showIframe ? "opacity-100" : "opacity-0"
          }`}
        ></iframe>
      </div>
    </main>
  );
}
