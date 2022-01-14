import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/4Volume_Qna.loader.js",
    dataUrl: "build/4Volume_Qna.data.br",
    frameworkUrl: "build/4Volume_Qna.framework.js.br",
    codeUrl: "build/4Volume_Qna.wasm.br",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game4(){
    return <Unity unityContext={unityContext} />;
}

export default game4;