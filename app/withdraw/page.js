"use client";
import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  const withdraw = () => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (!u) return alert("سجل الدخول أولًا");
    if (!amount || amount <= 0 || amount > u.balance) return alert("مبلغ غير صالح");
    u.balance -= Number(amount);
    localStorage.setItem("user", JSON.stringify(u));
    alert("تم السحب بنجاح");
    setAmount("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">سحب</h1>
      <input type="number" placeholder="المبلغ" value={amount} onChange={(e)=>setAmount(e.target.value)} className="border p-2 mb-2 text-black"/>
      <button onClick={withdraw} className="bg-green-500 text-white px-4 py-2 rounded">سحب</button>
    </div>
  );
}
