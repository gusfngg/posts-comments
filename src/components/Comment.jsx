import { useState } from 'react'

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment() {
      onDeleteComment(content)
   }

   function handleLikeComment() {
      setLikeCount(state => {
         return state + 1
      });
   }   

   return (
      <div className={styles.comment}>
         <Avatar
            hasBorder={false}
            src="https://images.unsplash.com/photo-1525871685609-48be2dbd54f8?q=60&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Gustavo Camargo</strong>
                     <time title='25 de Junho às 17:30h' dateTime='2024-06-25 17:30:48'>Cerca de 1h atrás</time>
                  </div>

                  <button 
                      title='Deletar comentario'
                      onClick={handleDeleteComment}
                  >
                     <Trash size={24}/>
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                     Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   )
}