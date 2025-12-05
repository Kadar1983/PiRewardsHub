import Navbar from '../../components/Navbar';

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-4">
        <h1 className="text-xl font-bold mb-2">سياسة الخصوصية</h1>
        <p>نحن لا نقوم بتخزين أي بيانات شخصية.</p>
      </div>
    </div>
  );
}
