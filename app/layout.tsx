import './globals.css';
import type { Metadata } from 'next';
import AppShell from '../src/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Kasparro — AI-native SEO',
  description: 'Mocked demo of an AI-native SEO & Brand Intelligence frontend.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
