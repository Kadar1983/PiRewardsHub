import React, { useEffect, useState } from "react";
import { getUserTransactions } from "../api/transactions";

export default function TransactionList({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const t = await getUserTransactions(userId);
      setData(t);
    }
    load();
  }, [userId]);

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2">المعاملات</h2>
      {data.map(t => (
        <p key={t.id}>
          {t.date} - {t.type} - {t.amount} Pi
        </p>
      ))}
    </div>
  );
}
