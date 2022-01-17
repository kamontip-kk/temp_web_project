import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Selection from '../components/Selection';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maths Phra Dhabos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to Maths Phra Dhabos!
        </h1>
        <Selection/>
      </main>  
    </div>
  )
}

export default Home
