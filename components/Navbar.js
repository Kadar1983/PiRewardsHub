'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Play to Earn', href: '/page' },
    { name: 'Login', href: '/login' },
    { name: 'Withdraw', href: '/withdraw' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ];

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative">
      <div className="font-bold text-xl">Pi Rewards Hub</div>
      <div className="hidden md:flex space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-yellow-400">
            {link.name}
          </Link>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? '✖' : '☰'}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col space-y-2 p-4 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-yellow-400">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
