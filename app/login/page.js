"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '../../components/Navbar';

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const login = () => {
    localStorage.setItem("user", JSON.stringify({ id: 1, name, balance: 100 }));
    router.replace("/");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <input
          className="p-2 text-black mb-4"
          placeholder="اسم المستخدم"
          onChange={e => setName(e.target.value)}
        />
        <button
          className="p-2 bg-purple-600 rounded"
          onClick={login}
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}
