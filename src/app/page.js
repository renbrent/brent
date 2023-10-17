import styles from './page.module.css'
import Hello from "../components/Home/Hello"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello/>
    </main>
  )
}
