import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.scss'
import styles from './App.module.scss'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post author="alo" content="alo" />
      </main>
    </div>
    </>
  )
}

export default App
