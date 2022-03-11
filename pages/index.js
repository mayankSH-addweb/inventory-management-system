import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventory Management system</title>
      </Head>
      <h1>This is Home Page</h1>
      <h6>IMS</h6>
    </div>
  );
}
