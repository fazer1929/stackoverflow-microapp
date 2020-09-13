import React from 'react'
import styles from './ModalContent.module.css'
import {useStateValue} from '../../StateProvider'
function ModalContent({itemId,onClose}) {
    const[{items},dispatch] = useStateValue();
    const item = items[itemId];
    return (
        <div className={styles.container}>
            <div className={styles.cross} onClick={onClose}>X</div>
            <div className={styles.mainContent}>
                <div className={styles.modalHeader}>
                    <img className={styles.modalImage} src={item["owner"]["profile_image"]} />
                <div className={styles.userName}>{item["owner"]["display_name"]}</div>
                </div>

                <div className={styles.modalContent}>
                    <div className={styles.modalTitle}>Q. {item["title"]}</div>
                    <div className={styles.tags}><span className={styles.bodyTags}>Tags : </span>{item["tags"]?.map((tag,i) => <span key={i} className={styles.tag}>{tag}</span>)}</div>
                    <div className={styles.tags}> <span className={styles.bodyTags}>Answer Count : </span> {item["answer_count"]}</div>
                    <div className={styles.tags}><span className={styles.bodyTags}>View Count : </span>{item["view_count"]}</div>   
                </div>
            <a href={item["link"]} target="_blank"> <button className={styles.buttonLink}>See the question</button> </a>
            <button className={styles.buttonClose} onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ModalContent
