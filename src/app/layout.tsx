import './globals.css'
import { Header } from '@/components/header'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Meu Site - Aprendendo NextJS',
  description: 'Site completo para praticar nextjs com sujeito programador',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph:{
    title: "Aprendendo Next JS com Sujeito",
    images: ['https://sujeitoprogramador.com/wp-content/uploads/2023/06/softsk-1024x576.jpg']
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
