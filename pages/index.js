import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FaWhatsapp } from 'react-icons/fa';

import { Menu } from '../components/menu';
import BannerHome from '../assets/banner-home.jpg';
import BannerMobile from '../assets/banner-mobile.jpg';
import { Plans } from '../components/plans';
import Form from '../components/formDiv';
import { Footer } from '../components/footer';
import { Map } from '../components/map';
import { Company } from '../components/company';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CDD CALL | Sercomtel</title>
        <meta name="description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="CDD CALL | Sercomtel" />
        <meta name="author" content="Thiago Santos" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cddcall.com.br/" />
        <meta property="og:title" content="CDD CALL | Sercomtel" />
        <meta property="og:description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <meta property="og:image" content="https://i.ibb.co/ChQB7B0/cdd-call-tag.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cddcall.com.br/" />
        <meta property="twitter:title" content="CDD CALL | Sercomtel" />
        <meta property="twitter:description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <meta property="twitter:image" content="https://i.ibb.co/ChQB7B0/cdd-call-tag.jpg" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <div className={styles.bannerHome}>
          <Image src={BannerHome} width={1920} height={580} />
        </div>
        <div className={styles.bannerMobileHome}>
          <Image src={BannerMobile} width={920} height={600} />
        </div>
        <h1 id="plans">Busca por velocidade e estabilidade? <span>Contrate o plano Sercomtel Fibra 400 Mega</span>.</h1>
        <Plans />
        <Form />
        <Company />
        <Map />
      </main>
      <Footer />
      <div className={styles.wppPlugin}>
        <Link href="https://api.whatsapp.com/send?phone=554333429000">
          <a target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </div>
  )
}
