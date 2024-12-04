import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Todo App",
  description: "using Appwrite for Backend (learning in process)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-zinc-900 text-white">
        {children}
      </body>
    </html>
  );
}
