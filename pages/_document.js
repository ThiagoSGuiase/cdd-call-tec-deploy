import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Uma empresa Londrinense totalmente focada na busca por soluções tecnológicas que levam maior agilidade e confiabilidade para clientes e parceiros comerciais." />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument