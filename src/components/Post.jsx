import styles from './Post.module.scss';
import ProfileImg from '../assets/profile.jpeg'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={ProfileImg} />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Cesarino</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time dateTime='2023-01-01 08:12:59' title='1 de Janeiro às 8:12h'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio</p>
                <p>👉{" "}<a href="#">checkout.com</a></p>
                <p>
                    <a href="#">#a</a> {" "}
                    <a href="#">#b</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar  </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}