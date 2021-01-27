import React from 'react'
import styles from './DeleteButton.module.css'



const DeleteButton = (props) => {
 
  return (
    <button className={styles.destroy} onClick={props.onDelete} />
  )
}




export default DeleteButton