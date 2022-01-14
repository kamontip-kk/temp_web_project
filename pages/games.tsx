import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function games(){
    return(
        <div className={`${styles.games} ${styles.main}`}>
            <div className={styles.buttons}>
                <Link href='/game1'>
                    <a className={styles.card}>
                        <h2>เกมหาพื้นที่ 1 &rarr;</h2>
                        <p>เกมยิงปืนเพื่อหาพื้นที่ของรูปเรขาคณิต</p>
                    </a>
                </Link>
                <Link href='/game2'>
                    <a className={styles.card}>
                        <h2>เกมหาพื้นที่ 2 &rarr;</h2>
                        <p>เกมตอบคำถามเพื่อหาพื้นที่รูปเรขาคณิต</p>
                    </a>
                </Link>
                <Link href='/game3'>
                    <a className={styles.card}>
                        <h2>เกมหาปริมาตร 1 &rarr;</h2>
                        <p>เกมยิงปืนเพื่อหาปริมาตรของรูปทรงเรขาคณิต</p>
                    </a>
                </Link>
                <Link href='/game4'>
                    <a className={styles.card}>
                        <h2>เกมหาปริมาตร 2 &rarr;</h2>
                        <p>เกมตอบคำถามเพื่อหาปริมาตรของรูปทรงเรขาคณิต</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default games;