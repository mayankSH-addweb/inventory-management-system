import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IMS</title>
      </Head>
      <h1>This is Inventory Management System's Home Page</h1>
    </div>
  );
}
