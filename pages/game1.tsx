import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
// import '../styles/games1style.css';

const unityContext = new UnityContext({
    loaderUrl: "build/1Area_Shooting.loader.js",
    dataUrl: "build/1Area_Shooting.data",
    frameworkUrl: "build/1Area_Shooting.framework.js",
    codeUrl: "build/1Area_Shooting.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game1(){
    return(
        <div>
            <Unity unityContext={unityContext}
            style={{
                width:'100%',
                height: '100%'
            }} />;

        </div>
    ) 
}

export default game1;