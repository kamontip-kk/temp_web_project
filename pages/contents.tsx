import React, { useState } from "react";
import Link from 'next/link';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css';
import { Modal} from 'antd';
import 'antd/dist/antd.css';

function Contents() {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);


    return (
        <div className={`${styles.contents} ${styles.main}`}>
            <h1>การหาพื้นที่</h1>
            <div className={styles.buttons}>
                <Link href='' >
                    <a className={styles.card} onClick={() => setModal1(true)}>
                        <h2>สี่เหลี่ยมด้านขนาน</h2>
                    </a>
                </Link>
                <Modal
                    title="สี่เหลี่ยมด้านขนาน"
                    centered
                    visible={modal1}
                    onOk={() => setModal1(false)}
                    onCancel={() => setModal1(false)}
                    width={700}
                >
                    <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/phradabos-4d64e.appspot.com/o/%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%99.mp4?alt=media&token=c948f234-bfa4-4a5d-8dea-fa2a47129bba' controls />
                </Modal>

                <Link href=''>
                    <a className={styles.card} onClick={() => setModal2(true)}>
                        <h2>สี่เหลี่ยมรูปว่าว</h2>
                    </a>
                </Link>
                <Modal
                    title="สี่เหลี่ยมรูปว่าว"
                    centered
                    visible={modal2}
                    onOk={() => setModal2(false)}
                    onCancel={() => setModal2(false)}
                    width={700}
                >
                    <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/phradabos-4d64e.appspot.com/o/%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A7.mp4?alt=media&token=61821789-2da0-4d6f-9044-7907b41883a7' controls />
                </Modal>

                <Link href=''>
                    <a className={styles.card} onClick={() => setModal3(true)}>
                        <h2>สี่เหลี่ยมขนมเปียกปูน</h2>
                    </a>
                </Link>
                <Modal
                    title="สี่เหลี่ยมขนมเปียกปูน"
                    centered
                    visible={modal3}
                    onOk={() => setModal3(false)}
                    onCancel={() => setModal3(false)}
                    width={700}
                >
                    <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/phradabos-4d64e.appspot.com/o/%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%B5%E0%B8%A2%E0%B8%81%E0%B8%9B%E0%B8%B9%E0%B8%99.mp4?alt=media&token=3e69ba87-7246-44c5-92cd-a8d0f788bbe8' controls />
                </Modal>

                <Link href=''>
                    <a className={styles.card} onClick={() => setModal4(true)}>
                        <h2>สี่เหลี่ยมคางหมู</h2>
                    </a>
                </Link>
                <Modal
                    title="สี่เหลี่ยมคางหมู"
                    centered
                    visible={modal4}
                    onOk={() => setModal4(false)}
                    onCancel={() => setModal4(false)}
                    width={700}
                >
                    <ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/phradabos-4d64e.appspot.com/o/%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%84%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B9.mp4?alt=media&token=defdf9a2-bab0-4b3c-be54-3cf94bcb0963' controls />
                </Modal>
            </div>
        </div>
    )
}

export default Contents;