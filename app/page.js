'use client';

import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [points, setPoints] = useState(100);
  const [streak, setStreak] = useState(0);
  const [lastClaim, setLastClaim] = useState(null);
  const [canClaim, setCanClaim] = useState(true);
  const [countdown, setCountdown] = useState('00:00:00');
  const dailyBase = 10;
  const dailyAmount = Math.min(100, dailyBase + Math.floor(streak / 3) * 5);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('pi_rewards_daily')) || {};
    if (saved.points) setPoints(saved.points);
    if (saved.streak) setStreak(saved.streak);
    if (saved.lastClaim) setLastClaim(new Date(saved.lastClaim));
  }, []);

  useEffect(() => {
    const data = { points, streak, lastClaim: lastClaim ? lastClaim.toISOString() : null };
    localStorage.setItem('pi_rewards_daily', JSON.stringify(data));
  }, [points, streak, lastClaim]);

  useEffect(() => {
    const tick = () => {
      if (!lastClaim) {
        setCanClaim(true);
        setCountdown('Ready');
        return;
      }
      const now = new Date();
      const next = new Date(lastClaim.getTime() + 24 * 60 * 60 * 1000);
      const diff = next - now;
      if (diff <= 0) {
        setCanClaim(true);
        setCountdown('Ready');
      } else {
        setCanClaim(false);
        const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const m = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const s = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        setCountdown(`${h}:${m}:${s}`);
      }
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [lastClaim]);

  const handleClaim = () => {
    if (!canClaim) return;
    const now = new Date();
    let newStreak = 1;
    if (lastClaim) {
      const diff = now - lastClaim;
      if (diff < 48 * 60 * 60 * 1000) newStreak = streak + 1;
    }
    setStreak(newStreak);
    setLastClaim(now);
    setPoints(prev => prev + dailyAmount);
  };

  const resetDaily = () => {
    setStreak(0);
    setLastClaim(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
        <h1 className="text-3xl font-bold text-center">Pi Rewards Hub</h1>

        {/* Wallet / Points */}
        <Card>
          <CardContent className="p-6 space-y-2">
            <p className="text-neutral-300">Points:</p>
            <p className="text-2xl font-bold">{points} Pi</p>
          </CardContent>
        </Card>

        {/* Daily Rewards */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Daily Rewards</h2>
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-neutral-800 shadow-lg">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-neutral-300">
                  Claim a daily reward once every 24 hours. Maintain your streak to increase rewards.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-neutral-400">Streak</p>
                    <p className="text-2xl font-bold">{streak} 🔥</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-400">Next Claim</p>
                    <p className="text-2xl font-bold">{countdown}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="rounded-2xl px-4 py-2 w-full" onClick={handleClaim} disabled={!canClaim}>
                    Claim {dailyAmount} Pi
                  </Button>
                  <Button className="rounded-2xl px-4 py-2 w-full" variant="secondary" onClick={resetDaily}>
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Play to Earn */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Play to Earn</h2>
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-neutral-800 shadow-lg">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-neutral-300">Play mini-games and earn Pi rewards for completing tasks.</p>
                <div className="flex gap-3">
                  <Button className="rounded-2xl px-4 py-2 w-full">Start Game</Button>
                  <Button className="rounded-2xl px-4 py-2 w-full" variant="secondary">
                    Leaderboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </>
  );
}
