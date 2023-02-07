import Link from "next/link";
import React from "react";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import profilePic from "./../../public/Screenshot_1.jpg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Lorem Ipsum has been the industry&apos;s standard dummy.</h1>
      <div className={styles.headerWrapper}>
        <div className={styles.leftSide}>
          <p>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since 1500s.
          </p>
          <form>
            <input type="email" placeholder="Enter your email here" />
            <button type="submit">Request a demo</button>
          </form>
          <p>Lorem Ipsum has been the industry</p>
          <div className={styles.links}>
            <Link href="https://statuspal.io/" target="_blank" rel="noreferrer">
              Statuspal
            </Link>
            <Link href="https://medium.com/" target="_blank" rel="noreferrer">
              PURPOSE
            </Link>
            <Link
              href="https://www.freshworks.com/freshservice/"
              target="_blank"
              rel="noreferrer"
            >
              freshworks
            </Link>
            <Link href="https://medium.com/" target="_blank" rel="noreferrer">
              Medium
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image src={profilePic} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};
