import React from 'react'
import styles from '../SectionOne/SectionOne.module.css'
import clock from '../../assets/IMAGE/watch (1).png'

const SectionOne = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
           <div className={styles.writeBox}>
           <h1>Select Your New Perfect Style</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
            <button>Shop Now</button>
           </div>
        </div>
        <div className={styles.rightBox}>
            <img src={clock} alt="" />
        </div>
    </div>
    </div>
    
  )
}

export default SectionOne
