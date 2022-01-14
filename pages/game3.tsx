import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/3Volume_Shooting.loader.js",
    dataUrl: "build/3Volume_Shooting.data.br",
    frameworkUrl: "build/3Volume_Shooting.framework.js.br",
    codeUrl: "build/3Volume_Shooting.wasm.br",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game3(){
    return <Unity unityContext={unityContext} />;
}

export default game3;