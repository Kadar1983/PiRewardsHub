'use client';

import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const [points, setPoints] = useState(100);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('pi_rewards_daily')) || {};
    if (saved.points) setPoints(saved.points);
    if (saved.transactions) setTransactions(saved.transactions);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Card>
          <CardContent>
            <p>رصيدك الحالي: {points} Pi</p>
            {transactions.length === 0 ? (
              <p className="text-neutral-400">لا توجد معاملات حالياً.</p>
            ) : (
              <ul>
                {transactions.map((t, i) => (
                  <li key={i}>
                    {t.date} - {t.amount} Pi - {t.type}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );

}
