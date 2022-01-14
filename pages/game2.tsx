import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/2Area_Qna.loader.js",
    dataUrl: "build/2Area_Qna.data",
    frameworkUrl: "build/2Area_Qna.framework.js",
    codeUrl: "build/2Area_Qna.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game2(){
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

export default game2;