import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raheem Blog</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
