import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clerkie Frontend Challenge',
  description: 'Done by Chow Yip Hern',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {


  return (
    <html lang="en">
      <body className={`${inter.className} column`}>
        <Sidebar/>
        <div className="column-other-items">          
          {children}        
        </div>
    
      </body>
    </html>
  )
}
