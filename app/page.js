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
  const [gameMessage, setGameMessage] = useState('');
  const dailyBase = 10;
  const dailyAmount = Math.min(100, dailyBase + Math.floor(streak / 3) * 5);

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('pi_rewards_daily')) || {};
    if (saved.points) setPoints(saved.points);
    if (saved.streak) setStreak(saved.streak);
    if (saved.lastClaim) setLastClaim(new Date(saved.lastClaim));
  }, []);

  // Save data
  useEffect(() => {
    const data = { points, streak, lastClaim: lastClaim ? lastClaim.toISOString() : null };
    localStorage.setItem('pi_rewards_daily', JSON.stringify(data));
  }, [points, streak, lastClaim]);

  // Countdown
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

  // Daily claim
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

  // Mini-game
  const playGame = () => {
    const earned = Math.floor(Math.random() * 20) + 5;
    setPoints(prev => prev + earned);
    setGameMessage(`🎉 You earned ${earned} Pi!`);
    setTimeout(() => setGameMessage(''), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
        <h1 className="text-3xl font-bold text-center">Pi Rewards Hub</h1>

        {/* Wallet */}
        <Card>
          <CardContent>
            <p>Points: <strong>{points} Pi</strong></p>
          </CardContent>
        </Card>

        {/* Daily Rewards */}
        <Card>
          <CardContent>
            <p>Daily Rewards</p>
            <p>Streak: {streak} 🔥</p>
            <p>Next Claim: {countdown}</p>
            <div className="flex gap-2 mt-2">
              <Button onClick={handleClaim} disabled={!canClaim}>Claim {dailyAmount} Pi</Button>
              <Button variant="secondary" onClick={resetDaily}>Reset</Button>
            </div>
          </CardContent>
        </Card>

        {/* Mini-Game */}
        <Card>
          <CardContent>
            <p>Play to Earn</p>
            <Button onClick={playGame}>🎮 Play Game</Button>
            {gameMessage && <p className="text-green-400 font-bold">{gameMessage}</p>}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
