"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const user = { id: Date.now(), name, balance: 100 };
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول</h1>
      <input
        type="text"
        placeholder="اسم المستخدم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        دخول
      </button>
    </div>
  );
}
