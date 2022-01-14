import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function contents(){
    return(
        <div className={`${styles.contents} ${styles.main}`}>
            <h1>การหาพื้นที่</h1>
            <div className={styles.buttons}>
                <Link href='/game1'>
                    <a className={styles.card}>
                        <h2>สี่เหลี่ยมด้านขนาน</h2>
                    </a>
                </Link>
                <Link href='/game2'>
                    <a className={styles.card}>
                        <h2>สี่เหลี่ยมรูปว่าว</h2>
                    </a>
                </Link>
                <Link href='/game3'>
                    <a className={styles.card}>
                        <h2>สี่เหลี่ยมขนมเปียกปูน</h2>
                    </a>
                </Link>
                <Link href='/game4'>
                    <a className={styles.card}>
                        <h2>สี่เหลี่ยมคางหมู</h2>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default contents;