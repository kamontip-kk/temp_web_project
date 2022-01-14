import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';

const unityContext = new UnityContext({
    loaderUrl: "build/2Area_Qna.loader.js",
    dataUrl: "build/2Area_Qna.data",
    frameworkUrl: "build/2Area_Qna.framework.js",
    codeUrl: "build/2Area_Qna.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game2(){
    return (
        <div className={styles.game2}>
            <Unity unityContext={unityContext}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
        </div>
    )
}

export default game2;