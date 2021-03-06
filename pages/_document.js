import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href='/fonts/MPLUSRounded1c-Bold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel="preload"
            href='/fonts/MPLUSRounded1c-Medium.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel="preload"
            href='/fonts/MPLUSRounded1c-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
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