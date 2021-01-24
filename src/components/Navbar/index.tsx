import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './styles'

function Navbar(){

    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl('enturmacao')
    }, [])

    return (
        <Container >
            <a href="/enturmacao/alunos">
                Enturmação
            </a>
            <ul>
                <li>
                    <Link href='/enturmacao/alunos'>
                        <a>Alunos</a>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default Navbar