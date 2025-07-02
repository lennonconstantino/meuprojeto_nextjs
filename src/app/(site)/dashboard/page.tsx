import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Painel - Aprendendo NextJS',
  description: 'Site completo para praticar nextjs com sujeito programador',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph:{
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


export default function Dashboard(){
  return(
    <div>
      <h1>Página painel</h1>
      <span>Bem vindo ao painel do site</span>
      <br/>
      
    </div>
  )
}