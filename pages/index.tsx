import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Buttons from '../components/Buttons'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pradapos Temporary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to MathGame!
        </h1>
        <Buttons/>
      </main>  
    </div>
  )
}

export default Home
