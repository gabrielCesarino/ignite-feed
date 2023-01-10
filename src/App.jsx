import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'

function App() {
  return (
    <>
    <Header />
      <Post
        author="Diego"
        content="lorem10"
      />
      <Post
        author="Teste"
        content="Tes111"
      />
    </>
  )
}

export default App
