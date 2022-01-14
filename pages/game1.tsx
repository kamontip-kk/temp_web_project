import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/Area_Shooting.loader.js",
    dataUrl: "build/Area_Shooting.data.br",
    frameworkUrl: "build/Area_Shooting.framework.js.br",
    codeUrl: "build/Area_Shooting.wasm.br",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function game1(){
    return <Unity unityContext={unityContext} />;
}

export default game1;