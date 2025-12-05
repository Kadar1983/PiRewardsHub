"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [piID, setPiID] = useState("");
  const router = useRouter();

  const login = () => {
    if (!piID) return alert("أدخل PI ID");
    localStorage.setItem("user", JSON.stringify({ name: piID, balance: 0, id: piID }));
    router.replace("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-6">تسجيل الدخول</h1>
      <input type="text" placeholder="PI ID" value={piID} onChange={(e)=>setPiID(e.target.value)} className="border p-2 mb-2 text-black"/>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">دخول</button>
    </div>
  );
}
