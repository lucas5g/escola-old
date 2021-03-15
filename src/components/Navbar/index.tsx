// import Link from 'next/link'
import { useEffect, useState } from 'react'
import Link from '../Link'
import { Container } from './styles'

function Navbar() {

  const [url, setUrl] = useState('')
  const [nav, setNav] = useState('')
  // const [pathname, setPathname] = useState('')
  useEffect(() => {
    // setUrl('enturmacao')
    const pathname = window.location.pathname
    const pathnameArray = pathname.split('/')
    const baseUrl = pathnameArray[1]


    if (baseUrl === 'enturmacao') {
      setUrl(`/${baseUrl}`)
      setNav('Enturmação')
      localStorage.setItem('nav', 'Enturmação')
    }
    // console.log({baseUrl})
  }, [])

  return (
    <Container >
      <Link href={url}>
        {nav}
      </Link>

      <ul>
        <li>
          <Link href={`${url}/alunos`}>
            Alunos
          </Link>
        </li>
        <li>
          <Link href={`${url}/turmas`}>
            Turmas
          </Link>
        </li>
        <li>
          <Link href={`${url}/relatorios`}>
            Relatórios
          </Link>
        </li>
        <li>
          <Link href='/'>
            Menus
          </Link>
        </li>
      </ul>
    </Container>
  )
}

export default Navbar