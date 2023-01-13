import styles from './Comment.module.scss';
import profileImg from '../assets/profile.jpeg';
import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src={profileImg} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Cesarino</strong>
                            <time dateTime='2023-01-01 08:12:59' title='1 de Janeiro às 8:12h'>Há 1 hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom!</p>
                </div>
                <footer>
                    <button>
                        <HandsClapping />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}