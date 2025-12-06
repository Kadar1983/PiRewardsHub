// privacy.js
import Navbar from '@/components/Navbar';
export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-neutral-300">Your privacy is important. This app does not share your data.</p>
      </div>
    </>
  );
}
