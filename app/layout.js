import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Drives4Fun</title>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
