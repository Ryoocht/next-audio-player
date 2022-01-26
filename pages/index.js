import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AudioPlayer from "../components/AudioPlayer"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>React Audio Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AudioPlayer audioFile='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3'/>
      </main>
    </div>
  )
}