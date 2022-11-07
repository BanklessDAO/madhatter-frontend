import Head from 'next/head'
import { Alert } from "flowbite-react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Madhatter Frontend</title>
        <meta name="description" content="Bankless DAO Madhatter bot frontpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Alert color="info">Test Flowbite</Alert>;
      
    </div>
  )
}
