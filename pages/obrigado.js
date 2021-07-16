import Link from 'next/link';
import Head from 'next/head';
import { Menu } from '../components/menu';
import { Footer } from '../components/footer';

import styles from '../styles/Obrigado.module.css';

export default function Home() {
  return (
    <div className={styles.thanksPage}>
      <Head>
        <title>CDD CALL | Sercomtel</title>
        <meta name="description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className={styles.thanksContent}>
        <h1>Obrigado!</h1>
        <p>Responderemos o mais breve possível</p>
        <Link href="/">
          Voltar para a Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}