import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohanaprasad G — Amazon Connect Developer | AWS Certified | Gen AI',
  description:
    'Portfolio of Mohanaprasad G, an Amazon Connect & Gen AI Developer with 7 years of experience in cloud-native contact center solutions, AWS Bedrock, and full-stack development.',
  keywords: [
    'Amazon Connect Developer',
    'AWS Certified Developer',
    'Gen AI Developer',
    'Amazon Bedrock',
    'Full Stack Developer',
    'Mohanaprasad',
    'Contact Center',
    'Cloud Native',
  ],
  authors: [{ name: 'Mohanaprasad G' }],
  openGraph: {
    title: 'Mohanaprasad G — Amazon Connect Developer | AWS Certified | Gen AI',
    description:
      'Portfolio of Mohanaprasad G, an Amazon Connect & Gen AI Developer with 7 years of experience in cloud-native contact center solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
