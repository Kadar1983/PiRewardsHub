use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 space-y-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button className="w-full rounded-2xl" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
}
