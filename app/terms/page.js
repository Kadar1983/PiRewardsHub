import Navbar from '@/components/Navbar';
export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-neutral-300">By using this app, you agree to our terms and conditions.</p>
      </div>
    </>
  );
}
