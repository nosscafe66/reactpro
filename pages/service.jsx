import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'
import { Service } from '@/components/Service/service'
import { IndexButton } from '@/components/Button/indexbutton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <IndexButton />
      <IndexButton />
      <IndexButton />
      <Main page="Service" />
      <Footer />
    </div>
  )
}