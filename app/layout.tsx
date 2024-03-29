import { TrpcProvider } from '@/components/trpc-provider';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chopper',
  description: 'Generate your portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
