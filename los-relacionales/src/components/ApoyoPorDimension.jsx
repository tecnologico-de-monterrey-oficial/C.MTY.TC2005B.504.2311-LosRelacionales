import './ApoyoPorDimension.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import React from "react";

const  unityProvider  = () => {
    return (
        <div>
            <iframe
                src="/WebGL/SerpientesyEscaleras/index.html"
                title="WebGL Application"
                width="1260"
                height="750"
            />
        </div>
    );
}
    

export default unityProvider;

