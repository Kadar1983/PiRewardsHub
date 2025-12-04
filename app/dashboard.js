import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">لوحة التحكم</h1>
        <p>هنا يمكنك متابعة رصيدك ومعاملاتك.</p>
      </main>
      <Footer />
    </div>
  );
}
