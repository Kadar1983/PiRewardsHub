let transactions = [];

export async function getUserTransactions(userId) {
  return transactions.filter(t => t.userId === userId);
}

export async function addTransaction(userId, type, amount) {
  transactions.push({
    id: transactions.length + 1,
    userId,
    type,
    amount,
    date: new Date().toISOString().split("T")[0],
  });
}
