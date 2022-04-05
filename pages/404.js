import Link from 'next/link'

export default function FourOhFour() {
    return ( <div className='divspace'>
        <div className='small-card'>
        <p className=''>💀404 - Page Not Found</p>
        <Link href="/">
            <a className='btn'>
            👈🏻Go back
            </a>
        </Link>
    </div>
    </div>)
}