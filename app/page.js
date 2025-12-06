{ useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Coins, Settings } from "lucide-react";

export default function Home() {
  const [points, setPoints] = useState(1200);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pi Rewards Hub</h1>
        <Button variant="outline" className="rounded-2xl px-4 py-2">Log Out</Button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-neutral-800 shadow-lg">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Wallet className="w-6 h-6" />Wallet
              </div>
              <p className="text-neutral-400">Balance</p>
              <p className="text-3xl font-bold">{points} Pi</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-neutral-800 shadow-lg">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Coins className="w-6 h-6" />Rewards
              </div>
              <p className="text-neutral-400">Earned</p>
              <p className="text-3xl font-bold">560</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-neutral-800 shadow-lg">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Settings className="w-6 h-6" />Actions
            </div>
            <div className="flex gap-3">
              <Button className="rounded-2xl px-4 py-2 w-full">Claim</Button>
              <Button className="rounded-2xl px-4 py-2 w-full" variant="secondary" onClick={() => setPoints(points + 10)}>+10 Pi</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

    </div>
