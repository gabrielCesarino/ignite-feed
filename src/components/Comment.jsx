import styles from './Comment.module.scss';
import profileImg from '../assets/profile.jpeg';
import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, handleDeleteComment }) {

    return(
        <div className={styles.comment}>
            <Avatar src={profileImg} hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Cesarino</strong>
                            <time dateTime='2023-01-01 08:12:59' title='1 de Janeiro às 8:12h'>Há 1 hora atrás</time>
                        </div>
                        <button onClick={() => handleDeleteComment(content)} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
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