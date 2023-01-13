import styles from './Post.module.scss';
import ProfileImg from '../assets/profile.jpeg'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post ({ author, content, publishedAt}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time dateTime={publishedAt} title={publishedAt}>
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