import React, { useState } from 'react'
import styles from './Card.module.css'

function Card({lastQuestion,id,link,title,tags,ownerName,profileImage}) {
    const [pageNumber,setPageNumber] = useState(1)

    const handleModal = () => {
       console.log(lastQuestion)
    }

    return (
        <div onClick={() => lastQuestion(id)} className={styles.cardContainer}>
            <div className = {styles.cardAvatar}>
                <img className={styles.cardAvatarImage} src={profileImage} alt="User Avatar"/>
                <div className={styles.cardAuthor}>{ownerName} </div>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardHeading}>Q. {title}</h3>
                <div className={styles.cardContentTags}>
                    {tags?.map((tag,i) => <span key={i} className={styles.tag}>{tag}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Card
