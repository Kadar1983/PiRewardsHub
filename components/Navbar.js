import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">Pi Rewards Hub</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">Dashboard</Link>
        <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
        <Link href="/withdraw" className="text-gray-300 hover:text-white">Withdraw</Link>
        <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
        <Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link>
      </div>
    </nav>
  );
}
