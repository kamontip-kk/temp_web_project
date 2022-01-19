import React,{useState,useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import styles from '../styles/Home.module.css';
import Image from "next/dist/client/image";

const unityContext = new UnityContext({
    loaderUrl: "build/1Area_Shooting.loader.js",
    dataUrl: "build/1Area_Shooting.data",
    frameworkUrl: "build/1Area_Shooting.framework.js",
    codeUrl: "build/1Area_Shooting.wasm",
    webglContextAttributes:{preserveDrawingBuffer: true},
});

function Game1(){
    
    const [progression, setProgression] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        unityContext.on("progress", function (progression) {
          setProgression(progression);
        });
        unityContext.on("loaded", function () {
            setIsLoaded(true);
          });
      
      }, []);

    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    return (
        <div className={styles.game1}>
            <p className={styles.load} hidden={isLoaded}>
                Loading {progression * 100} %
            </p>
            <Unity unityContext={unityContext} className={styles.screen}
                style={{
                    width: '414px',
                    height: '896px',
                    visibility: isLoaded ? 'visible' : 'hidden',
                }} 
            />
            <button onClick={handleOnClickFullscreen} className={styles.fullscreen}>
                <Image src={`/img/fullscreen-button.png`} alt="edu1" width={35} height={35}/>
            </button>
        </div>
    )
}

export default Game1;