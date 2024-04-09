import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { NextAuthProvider } from "@/app/lib/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
