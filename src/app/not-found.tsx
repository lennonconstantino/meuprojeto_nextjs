import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Pagina nao encontrada!</h2>
      <p>parece que essa pagina que está tentando acessar nao existe!</p>
      <Link href="/">Voltar para home</Link>
    </div>
  )
}