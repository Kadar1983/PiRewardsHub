import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
