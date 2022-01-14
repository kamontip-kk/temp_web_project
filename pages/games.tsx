import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function games(){
    return(
        <div className={`${styles.games} ${styles.main}`}>
            <div className={styles.buttons}>
                <Link href='/game1'>
                    <a className={styles.card}>
                        <h2>Play Game 1 &rarr;</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
                <Link href='/game2'>
                    <a className={styles.card}>
                        <h2>Play Game 2 &rarr;</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
                <Link href='/game3'>
                    <a className={styles.card}>
                        <h2>Play Game 3 &rarr;</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
                <Link href='/game4'>
                    <a className={styles.card}>
                        <h2>Play Game 4 &rarr;</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default games;