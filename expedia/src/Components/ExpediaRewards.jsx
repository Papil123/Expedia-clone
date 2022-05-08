import React from 'react'
import styles from "../Css/ExpediaReward.module.css";

const ExpediaRewards = ({props}) => {
  return (
    <div>
        <div className={`${styles.firstDiv}`} >
          <img className={`${styles.img1}`} src='https://a.travel-assets.com/travel-assets-manager/ux-887/Global-HP-Hero-928x398.jpg' alt='sunset' />
          <div className={`${styles.innerDiv}`}>
              <h1 className={`${styles.heading}`}>Save instantly with Expedia Rewards</h1>
              <p className={`${styles.para}`}>You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.</p>
              <button>See Member Prices</button>
          </div>
        </div>
        <div className={`${styles.secondDiv}`}>
          <img className={`${styles.img2}`} src='https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg' alt='pool' />
          <div className={`${styles.innerdiv2}`}>
            <p className={`${styles.para1}`}>Plan ahead and save</p>
            <p className={`${styles.para2}`}>Book 60 days in advance for 20% off select stays</p>
          </div>
        </div>
    </div>
  )
}

export default ExpediaRewards;