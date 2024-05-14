import React from "react";
import styles from "../SectionTwo/SectionTwo.module.css";
import logo from "../../assets/IMAGE/new_product1 (1).png"

const SectionTwo = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
            <h1>New Arrivals</h1>
        </div>
        <div className={styles.bottomBox}>
            <div className={styles.logoWriteBox}>
                <img src={logo} alt="" />
                <div className={styles.writeBox}>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
            </div>
            <div className={styles.logoWriteBox}>
                <img src={logo} alt="" />
                <div className={styles.writeBox}>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
            </div>
            <div className={styles.logoWriteBox}>
                <img src={logo} alt="" />
                <div className={styles.writeBox}>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
