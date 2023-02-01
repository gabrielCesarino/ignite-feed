import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.scss';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Post ({ author, content, publishedAt}) {
    const [comments, setComments] = useState(['Post muito bacana, hein?']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment(comment) {    
        event.preventDefault();    
        setComments((state) => [...state, newCommentText]);
        setNewCommentText('');
    }

    function deleteComment(comment) {
        const commentsWithoutDeletedOne = comments.filter((item) => item !== comment);
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const isNewCommentInputEmpty = newCommentText.length === 0;

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
                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <a key={line.content} href={line.content}>{line.content}</a>
                    }
                })}
            </div>

            <form onSubmit={() => handleCreateNewComment(3)} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button disabled={isNewCommentInputEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => 
                    <Comment key={comment} content={comment} handleDeleteComment={deleteComment}/>
                )}
            </div>
        </article>
    )
}