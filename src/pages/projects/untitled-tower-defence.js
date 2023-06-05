import * as React from "react";
import { useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import styled from "styled-components";
import WaypointsSceneShowoff from "./videos/Quick Turret Waypoint Scene View.mp4"
import { Unity, useUnityContext } from "react-unity-webgl";
import { globalHistory } from "@reach/router"


const TowerDefencePage = () => {
  const { unityProvider, isLoaded, unload } = new useUnityContext({
    loaderUrl: "/unityWebGLBuilds/BasicScene/Build/BasicScene.loader.js",
    dataUrl: "/unityWebGLBuilds/BasicScene/Build/BasicScene.data",
    frameworkUrl: "/unityWebGLBuilds/BasicScene/Build/BasicScene.framework.js",
    codeUrl: "/unityWebGLBuilds/BasicScene/Build/BasicScene.wasm",
  })

  useEffect(() => {
    globalHistory.listen(async ({ action }) => {
      if ((action === "PUSH" || action === "POP") && isLoaded) {
        await unload()
      }
    })
  }, [isLoaded])
  
  return (
    <Layout pageTitle="RobboNet: Untitled Tower Defence Game">
      <h1>Quick Turret (Tower Defence Project)</h1>
      <p>
        I started this project as a quick attempt at making a cool turret - just
        to show myself how much I'd learned. It then took on a life of its own.
      </p>
      <p>
        I'd been playing a lot of{" "}
        <a href="https://en.wikipedia.org/wiki/Risk_of_Rain_2" target="_blank">
          Risk Of Rain 2
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Bloons_Tower_Defense"
          target="_blank"
        >
          Bloons Tower Defence 4
        </a>{" "}
        and felt inspired by the design of the two games. Risk Of Rain 2's
        systems in particular drew my attention. I know the game is made in
        Unity, and I'd spotted several things that to me were symptomatic of the
        game's code being well structured.
        <br/>
        Risk Of Rain's damage system can handle a
        plethora of interacting damage types being dealt to players, turrets,
        enemies, and environment features all at once in massive quantities.
        Furthermore, success in Risk Of Rain 2 involves combining lots of items
        and player abilities in satisfying synergy. Bloons, on the other hand,
        requires synergy between the placement of different turret types and the
        path the balloons are following. This pushed me to build this demo:
      </p>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: 640,
          height: 360,
          visibility: isLoaded ? "visible" : "hidden",
        }}
      />
      <h2>The Waypoints Component</h2>
      <p>
        The reason for including this project here is that working on this
        project has seriously levelled up my Unity skills. After coming up with
        the above demo, I then created a path in Blender for the enemies to
        follow. At first I used Unity's NavMesh system to tell the enemies how
        to navigate the path, but this led to the enemies mundanely following
        each other with ignorance to the branching paths. So I set about
        creating waypoints for them to follow, but this proved to be incredibly
        tedious, and added masses of complexity to the organisation of my
        project. I understand better now that an important part of being a good
        Unity developer is being able to create not just powerful MonoBehaviour
        components, but also custom Editor behaviour that makes those components
        easy to work with. So I set about creating a powerful waypoint system
        that is well integrated into the Unity Editor.
      </p>
      <video autoPlay controls loop muted width="720">
        <source src={WaypointsSceneShowoff} type="video/mp4" />
      </video>
      <p>
        The result is the Waypoints component, and its custom Editor. In the
        Unity Inspector, the component has a custom list view that gives the
        user not just the data associated with each Waypoint, but simple ways of
        editing that data. The real power of the component is in the Scene view
        however. I wanted a user to be able to use the component entirely within
        the Scene view via handles and a simple GUI. From the Scene view GUI
        each waypoint can be renamed, moved about, and have its connections
        edited. Handles in the Scene view also provide an easier way of
        manipulating waypoints and their connections. There are hotkeys to make
        editing really fast, and the component is totally integrated with the
        Unity Editor's Undo system.
      </p>
    </Layout>
  );
};

export default TowerDefencePage;
