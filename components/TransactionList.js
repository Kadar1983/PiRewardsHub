import { useEffect, useState } from "react";

export default function TransactionList({ userId }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // هنا يمكن ربط API حقيقي لمعاملات Pi
    fetch(`/api/transactions?userId=${userId}`)
      .then(res => res.json())
      .then(data => setTransactions(data.tx))
      .catch(err => console.error(err));
  }, [userId]);

  if (transactions.length === 0) return <div>لا توجد معاملات حالياً.</div>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">المعاملات</h2>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            {tx.date} - {tx.amount} Pi - {tx.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
