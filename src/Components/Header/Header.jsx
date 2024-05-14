import React from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/IMAGE/logo (15).png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src={logo} alt="" />
        <div className={styles.menuBox}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li className={styles.latestTag}>
                Latest <p>HOT</p>
              </li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.searchBox}>
            <CiSearch />
          </div>
          <div className={styles.userBox}>
            <CiUser />
          </div>
          <div className={styles.shopBox}>
            <CiShoppingCart />
          </div>
        </div>
      </div>
      <div className={styles.containerRes}>
        <div className={styles.topBox}>
          <img src={logo} alt="" />
          <div className={styles.iconBox}>
            <div className={styles.searchBox}>
              <CiSearch />
            </div>
            <div className={styles.userBox}>
              <CiUser />
            </div>
            <div className={styles.shopBox}>
              <CiShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.iconMenuBox}>
            <h2>MENU</h2>
            <div className={styles.hamburgerBox}>
              <GiHamburgerMenu />
            </div>
          </div>
        
        </div>
        <div className={styles.menuRepBox}>
            <nav>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li className={styles.latestTag}>
                  <p>HOT</p>
                  Latest
                </li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
      </div>
    </div>
  );
};

export default Header;
