import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';

const unityContext = new UnityContext({
    loaderUrl: "build/3Volume_Shooting.loader.js",
    dataUrl: "build/3Volume_Shooting.data",
    frameworkUrl: "build/3Volume_Shooting.framework.js",
    codeUrl: "build/3Volume_Shooting.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game3(){
    return (
        <div className={styles.game3}>
            <Unity unityContext={unityContext}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
        </div>
    )
}

export default game3;