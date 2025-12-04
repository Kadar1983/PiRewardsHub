import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div>
      <Header />
      <main className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">الشروط والأحكام</h1>
        <p>
          باستخدامك التطبيق، فإنك توافق على الالتزام بالشروط التالية:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>استخدام التطبيق لأغراض قانونية فقط.</li>
          <li>عدم مشاركة بيانات تسجيل الدخول مع أي شخص آخر.</li>
          <li>نحن غير مسؤولين عن أي خسائر نتيجة استخدام غير صحيح.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
