import Head from 'next/head'
import { useEffect } from 'react'
import Link from '../components/Link'

export default function Home() {

  return (
    <div>
      <ul>
        <li>
          <Link href='/administracao' >
            Administração
          </Link>
        </li>
        <li>
          <Link href='/enturmacao' >
            Enturmacao
          </Link>
        </li>
        <li>
          <Link href='/jisa'>
            Jisa
          </Link>
        </li>
        <li>
          <Link href='/monitoria'>
            Monitoria
          </Link>
        </li>
      </ul>
    </div>

  )
}
