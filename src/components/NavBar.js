import Link from "next/link";
import React from "react";
import styles from "@/styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <Link href="/">LittleBird.io</Link>
        <Link href="/product">Product</Link>
        <Link href="/features">Features</Link>
      </div>
      <Link href="/request_demo">Request Demo</Link>
    </div>
  );
};
