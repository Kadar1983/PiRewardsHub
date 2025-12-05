import Navbar from '../../components/Navbar';

export default function Terms() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-4">
        <h1 className="text-xl font-bold mb-2">الشروط والأحكام</h1>
        <p>باستخدام هذا التطبيق، فإنك توافق على الشروط.</p>
      </div>
    </div>
  );
}
