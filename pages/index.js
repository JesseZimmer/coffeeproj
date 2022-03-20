import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'

export default function Home() {

  const handleOnBannerBtnClick = () => {
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View Stores Nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
        <Image  src="/static/hero-image.svg" width={500} height={400}  />
        </div>
      </main>
    </div>
  )
}
