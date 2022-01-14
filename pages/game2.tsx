import React,{useEffect,useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';
import Image from "next/dist/client/image";

const unityContext = new UnityContext({
    loaderUrl: "build/2Area_Qna.loader.js",
    dataUrl: "build/2Area_Qna.data",
    frameworkUrl: "build/2Area_Qna.framework.js",
    codeUrl: "build/2Area_Qna.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game2(){

    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    // useEffect(()=>{
    //     unityContext.on("canvas", function (canvas) {
    //       canvas.getContext("webgl");
    //     });
    //   }, []);

    // useEffect(()=>{
    //     unityContext.on("canvas", function (canvas) {
    //       canvas.width = 414;
    //       canvas.height = 896;
    //     });
        
    //   }, []);

    return (
        <div className={styles.game2}>
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

export default game2;