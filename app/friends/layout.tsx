import type { Metadata } from 'next'


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
    <div>
        {children}        
    </div> 
   
  )
}
