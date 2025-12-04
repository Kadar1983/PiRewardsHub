import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Pi Rewards Hub',
  description: 'Dashboard for Pi Rewards',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="p-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
