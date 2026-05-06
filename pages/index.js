import Head from 'next/head'
import Link from 'next/link'
import style from './index.module.scss'
import generic from '@/styles/generic.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Relationship Counseling and Therapy</title>
        <meta
          name="description"
          content="Individual therapy and couples counseling, located in Pasadena, California. Remote counseling and therapy is also available"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main id="main">
        <div className={style.hero}>
          <div>
            <p className={style.location} aria-hidden="true">
              California · L.A. · Online
            </p>
            <h1>
              Therapy &amp; <br /> Couples Counseling. <span className={generic['sr-only']}>
              Located in Pasadena, California. Remote counseling is available.
            </span>
            </h1>
            <p className={style.tagline}>Free 20 minute consultation.</p>
            <div className={style.heroButtons}>
              <Link href="/appointment">
                Schedule <span className={generic["sr-only"]}>
                a free 20 minute consultation.
                </span>
              </Link>
              <a href="tel:555-555-5555">
                Call <span className={generic["sr-only"]}> 
                and speak with me.</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
