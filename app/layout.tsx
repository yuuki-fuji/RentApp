import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Rent App',
  description: 'Generated by create next app',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>
                {children}
            < /body>
        </html>
  )
}
