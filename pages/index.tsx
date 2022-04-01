import type { NextPage } from 'next'
import Head from 'next/head'
import Navegation from 'components/navegation'
import Body from 'components/homePage/body'
import Footer from 'components/footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>AliOlam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navegation />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
