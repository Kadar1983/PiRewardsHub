import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">Pi Rewards Hub</div>
      <div className="space-x-4">
        <Link href="/">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/withdraw">Withdraw</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </nav>
  );
}
