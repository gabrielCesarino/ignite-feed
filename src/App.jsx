import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.scss'
import styles from './App.module.scss'

const posts = [
  {
    id: 1,
    author: {
      name: "Gabriel Cesarino",
      avatarUrl: 'https://github.com/gabrielcesarino.png',
      role: 'Full Stack Dev'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
      {type: 'link', content: '👉{" "}<a href="#">checkout.com</a>'}
    ],
    publishedAt: new Date('2023-01-13 20:00:00')
  },
  {
    id: 2,
    author: {
      name: "Gabriel Cesarino",
      avatarUrl: 'https://github.com/gabrielcesarino.png',
      role: 'Full Stack Dev'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio'},
      {type: 'link', content: '👉{" "}<a href="#">checkout.com</a>'}
    ],
    publishedAt: new Date('2023-01-10 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.author}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
