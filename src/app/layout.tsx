'use client'
import "./normalize.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer
          position="top-right"
        />
      </body>
    </html>
  );
}
