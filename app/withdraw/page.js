"use client";
import { useState } from "react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    alert(`تم سحب ${amount} Pi!`);
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">سحب Pi</h1>
      <input
        type="number"
        placeholder="المبلغ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleWithdraw}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        سحب
      </button>
    </div>
  );
}
