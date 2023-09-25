import Image from 'next/image'
import styles from './page.module.css'
import MainPAge from '@/Pages/MainPage/Main'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <MainPAge/>
    </main>
  )
}
