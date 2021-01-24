// import Link from 'next/link'
import { useEffect, useState } from 'react'
import Link from '../Link'
import { Container } from './styles'

function Navbar() {

    const [url, setUrl] = useState('')
    // const [pathname, setPathname] = useState('')
    useEffect(() => {
        // setUrl('enturmacao')
        const pathname = window.location.pathname

        setUrl(
            pathname
        )
        console.log('teste')
        console.log(url)
    }, [])

    return (
        <Container >
            <Link href='/enturmacao'>
                Enturmação
            </Link>
            <ul>
                <li>
                    <Link href='/enturmacao/alunos'>
                        Alunos
                    </Link>
                </li>
                <li>
                    <Link href='/enturmacao/turmas'>
                        Turmas
                    </Link>
                </li>
                <li>
                    <Link href='/enturmacao/relatorios'>
                        Relatorios
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default Navbar