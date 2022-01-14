import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';

const unityContext = new UnityContext({
    loaderUrl: "build/4Volume_Qna.loader.js",
    dataUrl: "build/4Volume_Qna.data",
    frameworkUrl: "build/4Volume_Qna.framework.js",
    codeUrl: "build/4Volume_Qna.wasm",
    webglContextAttributes: { preserveDrawingBuffer: true },
});

function game4() {
    return (
        <div className={styles.game4}>
            <Unity unityContext={unityContext} className={styles.screen}
                // style={{
                //     width: '1024px',
                //     height: '768px',
                // }} 
                />
        </div>
    )
}

export default game4;