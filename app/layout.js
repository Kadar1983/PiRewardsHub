export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-[#0f1724] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
