import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/4Volume_Qna.loader.js",
    dataUrl: "build/4Volume_Qna.data",
    frameworkUrl: "build/4Volume_Qna.framework.js",
    codeUrl: "build/4Volume_Qna.wasm",
    webglContextAttributes: { preserveDrawingBuffer: true },
});

function game4() {
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

export default game4;