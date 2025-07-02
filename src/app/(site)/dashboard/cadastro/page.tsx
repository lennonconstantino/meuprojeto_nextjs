import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Painel - Cadastrando usuario',
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

export default function Cadastro(){
  return(
    <div>
      <h1>Cadastrando cliente</h1>
      <p>Essa é a pagina de cadastro de clientes do dashboard</p>
    </div>
  )
}