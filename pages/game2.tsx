import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/2Area_Qna.loader.js",
    dataUrl: "build/2Area_Qna.data.br",
    frameworkUrl: "build/2Area_Qna.framework.js.br",
    codeUrl: "build/2Area_Qna.wasm.br",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game2(){
    return <Unity unityContext={unityContext} />;
}

export default game2;