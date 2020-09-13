import React,{useState} from 'react'
import Card from '../Cards/Card'
import styles from './Home.module.css'
import useApiQuery from '../../apiQuery'
import Modal from 'react-modal'
import ModalContent from '../ModalContent/ModalContent'
import {useStateValue} from '../../StateProvider'

function Home() {
    const[{items},dispatch] = useStateValue();
    const[pageNumber,setPageNumber] = useState(1)
    const[isModalVisible,setIsModalVisible]  = useState(false);
    const[id,setId] = useState(0);
 
    let{loading} = useApiQuery(pageNumber);
    const closeModal = ()=>{
        setIsModalVisible(false)
    }
    const lastQuestion = (ida) =>{
        setIsModalVisible(true)
        setId(ida);
    }
    return (
        <div className={styles.mainContainer}>
            {items?.map((item,i) =>{ 
                return(
                        <Card
                            id={i}
                            lastQuestion={lastQuestion}
                            key={i}
                            link = {item.link}
                            title = {item.title}
                            tags= {item.tags}
                            ownerName = {item["owner"]["display_name"]}
                            profileImage = {item["owner"]["profile_image"]}
                        />
                    )
                
        }
            )}
        
        <Modal isOpen={isModalVisible} onRequestClose={closeModal}>
            <ModalContent itemId={id} onClose={closeModal} />
        </Modal>
            
        {loading?<h3>Loading....</h3>:""}
        </div>
    )
}

export default Home;
