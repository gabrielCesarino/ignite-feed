import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.scss'
import styles from './App.module.scss'

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post author="alo" content="alo" />
        <Post author="alo" content="alo" />
      </main>
    </div>
    </>
  )
}

export default App
