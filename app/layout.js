import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
