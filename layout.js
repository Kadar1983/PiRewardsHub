export const metadata = {
  title: 'Pi Rewards Hub',
  description: 'Dashboard for Pi Rewards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}