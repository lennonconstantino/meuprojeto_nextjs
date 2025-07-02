import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Pagina nao encontrada</h2>
            <p>parece que essa pagina está fora do ar</p>
            <Link href="/">Voltar para a home</Link>
        </div>
    )
}