import type { NextPage } from 'next'
import Head from 'next/head'
import Navegation from 'components/navegation'
import Footer from 'components/footer'
import Slideshow from 'components/slideshow'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Slideshow 
        className='px-4 pt-8 pb-7'
        imageSrc={require('public/producto-individual/producto-1.png')} />
      <Footer />
    </div>
  )
}

export default Home
