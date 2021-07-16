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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="CDD CALL | Sercomtel" />
        <meta property="og:description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="CDD CALL | Sercomtel" />
        <meta property="twitter:description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
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
        <Link href="https://web.whatsapp.com/send?phone=554333429000">
          <a target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </div>
  )
}
