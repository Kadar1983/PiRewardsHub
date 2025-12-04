import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TransactionList from "../components/TransactionList";
import { getUserData } from "../api/users";

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <div>
      <Header />
      <main className="p-4">
        {user ? (
          <>
            <h1 className="text-2xl font-bold mb-4">مرحبًا، {user.name}!</h1>
            <p className="mb-4">رصيدك الحالي: {user.balance} Pi</p>
            <TransactionList userId={user.id} />
          </>
        ) : (
          <p>الرجاء تسجيل الدخول للوصول إلى لوحة التحكم.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
