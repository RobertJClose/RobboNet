import * as React from "react";
import { useEffect } from "react";

import { Unity, useUnityContext } from "react-unity-webgl";
import { globalHistory } from "@reach/router";

export const UnityProject = ({ projectName, ...props }) => {
    const { unityProvider, isLoaded, unload } = useUnityContext({
        loaderUrl: `/unityWebGLBuilds/${projectName}/Build/${projectName}.loader.js`,
        dataUrl: `/unityWebGLBuilds/${projectName}/Build/${projectName}.data`,
        frameworkUrl: `/unityWebGLBuilds/${projectName}/Build/${projectName}.framework.js`,
        codeUrl: `/unityWebGLBuilds/${projectName}/Build/${projectName}.wasm`
      })

        
    useEffect(() => {
        globalHistory.listen(async ({ action }) => {
            if ((action === "PUSH" || action === "POP") && isLoaded) {
                await unload()
            }
        })
    }, [isLoaded])

      return (
        <Unity unityProvider={unityProvider} { ...props } />
      )
        
}