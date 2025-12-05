export default function handler(req, res) {
  // مثال وهمي للمعاملات، يمكن ربط Pi Network API الحقيقي هنا
  const tx = [
    { date: "2025-12-05", amount: 10, status: "نجاح" },
    { date: "2025-12-04", amount: 5, status: "نجاح" },
  ];

  res.status(200).json({ tx });
}