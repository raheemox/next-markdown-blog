import Link from 'next/link'

export default function Header() {
  return (
    <header>

        <ul className='flex'>
          <Link className='flex-items' href="/" >👌🏻Home</Link>
          <Link className='flex-items' href="/contact"> 👊🏻Contact </Link>
          <Link className='flex-items' href="/about">✍🏻About</Link>
        </ul>

    </header>
  )
}
