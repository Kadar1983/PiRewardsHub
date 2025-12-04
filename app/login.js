use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../api/users";

export default function Login() {
  const [piID, setPiID] = useState("");
  const router = useRouter();

  const login = async () => {
    const user = await loginUser(piID);
    if (!user) return alert("PI ID غير صحيح");

    localStorage.setItem("user", JSON.stringify(user));
    router.replace("/"); // تحويل مباشر بعد تسجيل الدخول
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">تسجيل الدخول</h1>

      <input
        type="text"
        placeholder="PI ID"
        value={piID}
        onChange={(e) => setPiID(e.target.value)}
        className="border p-2 mb-2 text-black"
      />

      <button
        onClick={login}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        دخول
      </button>
    </div>
  );
}
