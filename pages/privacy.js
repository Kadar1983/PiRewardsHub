import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div>
      <Header />
      <main className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">سياسة الخصوصية</h1>
        <p>
          نحن نحترم خصوصيتك ونلتزم بحماية بياناتك عند استخدام التطبيق.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>نقوم بجمع بيانات Pi ID فقط لتسجيل الدخول.</li>
          <li>لا نقوم بمشاركة أي بيانات مع أطراف ثالثة بدون موافقتك.</li>
          <li>يمكنك حذف بياناتك في أي وقت عن طريق تسجيل الخروج.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
    }
