export const metadata = { title: "Pi Rewards Hub" };
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-[#0f1724] text-white p-6">{children}</body>
    </html>
  );
}
