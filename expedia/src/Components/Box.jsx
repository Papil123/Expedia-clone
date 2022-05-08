import React from 'react'
import styles from "./box.module.css"



 const Box = () => {
  return (
    <div>
     
     <div className={styles.big_lake}>
        <div className={styles.left}><img className={styles.ig} src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_BLUE+SEA_300dpi.jpeg" alt=""/></div>
        <div className={styles.right}>
            <h1 className={styles.hed}>When you save more you see more</h1>
            <p>Join Expedia Rewards to access member discounts of 10% or more every day. Plus,<br/>collect points and unlock even more perks. There’s a lot of world out there, and our  members see more of it.</p>
            <div>
                <span><button>Sign Up</button></span>
                <a href="google.com">Sign in</a>
            </div>
        </div>
</div>



    </div>
  )
}
export default Box