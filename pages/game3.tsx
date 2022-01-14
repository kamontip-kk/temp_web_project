import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/3Volume_Shooting.loader.js",
    dataUrl: "build/3Volume_Shooting.data",
    frameworkUrl: "build/3Volume_Shooting.framework.js",
    codeUrl: "build/3Volume_Shooting.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game3(){
    return (
        <>
            <Unity unityContext={unityContext}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
        </>
    )
}

export default game3;