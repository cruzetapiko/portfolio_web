import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

export default function NavBar() {
  return (
    <header className='w-full px-32 py-6 font-medium flex items-center justify-between' >
        <Logo/>
        <nav>
            <Link href='/' >home</Link>
            <Link href='/about' >about</Link>
            <Link href='/contact' >projects</Link>
            <Link href='/contact' >articles</Link>
        </nav>
        <nav>
            <Link href='/contact' >T</Link>
            <Link href='/contact' >G</Link>
            <Link href='/contact' >L</Link>
            <Link href='/contact' >I</Link>
            <Link href='/contact' >Y</Link>

        </nav>
    </header>
  )
}
