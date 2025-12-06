'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Withdraw() {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    alert(`You requested to withdraw ${amount} Pi`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 space-y-6">
        <h1 className="text-3xl font-bold">Withdraw</h1>
        <Input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <Button className="w-full rounded-2xl" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </div>
    </>
  );
}
