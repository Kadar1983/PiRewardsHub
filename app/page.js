"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TransactionList from "../components/TransactionList";

export default function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/login"); // إعادة توجيه لصفحة تسجيل الدخول
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) return <p>جاري التحويل لتسجيل الدخول...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">مرحبًا، {user.name}!</h1>
      <p className="mb-4">رصيدك الحالي: {user.balance} Pi</p>
      <TransactionList userId={user.id} />
    </div>
  );
}
