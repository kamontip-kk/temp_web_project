import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';
import Image from "next/dist/client/image";

const unityContext = new UnityContext({
    loaderUrl: "build/4Volume_Qna.loader.js",
    dataUrl: "build/4Volume_Qna.data",
    frameworkUrl: "build/4Volume_Qna.framework.js",
    codeUrl: "build/4Volume_Qna.wasm",
    webglContextAttributes: { preserveDrawingBuffer: true },
});

function game4() {

    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    return (
        <div className={styles.game4}>
            <Unity unityContext={unityContext} className={styles.screen}
                style={{
                    width: '414px',
                    height: '896px',
                }} 
            />
            <button onClick={handleOnClickFullscreen} className={styles.fullscreen}>
                <Image src={`/img/fullscreen-button.png`} alt="edu1" width={35} height={35}/>
            </button>
        </div>
    )
}

export default game4;