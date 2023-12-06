import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootHTML from './root-layout'
import ConvexClientProvider from './ConvexClientProvider'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootHTML>
      <body className={inter.className}>
        <ConvexClientProvider>
        <Navbar />
            <div className="flex">
                <Sidebar />
                {children}
            </div>
          
        </ConvexClientProvider>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"  rel="stylesheet" />
      </body>
    </RootHTML>
  )
}
