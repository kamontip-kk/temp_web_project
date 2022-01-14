import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Selection(){
    return(
        <div className={styles.Selection}>
            <div className={styles.buttons}>
                <Link href='/contents'>
                    <a className={styles.card}>
                        <h2>Animation Contents</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
                <Link href='/games'>
                    <a className={styles.card}>
                        <h2>Play Games</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Selection;