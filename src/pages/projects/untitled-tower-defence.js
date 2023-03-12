import * as React from "react";
import Layout from "../../components/layouts/Layout";
import styled from "styled-components";
import WaypointsSceneShowoff from "./videos/Quick Turret Waypoint Scene View.mp4"

const TowerDefencePage = () => {
  return (
    <Layout pageTitle="RobboNet: Untitled Tower Defence Game">
      <h1>Quick Turret (Tower Defence Project)</h1>
      <p>
        This last project started as a small and fast project that was only
        meant to show me how much I'd learned. I'd been playing a lot of{" "}
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
        and thought that the two game's systems would mesh well together. Risk
        Of Rain 2's systems in particular drew my attention. I know the game is
        made in Unity, and I'd spotted several things that to me were
        symptomatic of the game's code being well structured. I wanted to try
        and emulate the game's systems, but in a different context where their
        expression would change. More specifically, Risk Of Rain's damage system
        can handle a plethora of interacting damage types being dealt to
        players, turrets, enemies, and environment features all at once in
        massive quantities. Furthermore, success in Risk Of Rain 2 involves
        combining lots of items and player abilities in satisfying synergy.
        Bloons, on the other hand, requires synergy between the placement of
        different turret types and the path the balloons are following. I think
        combining the two games and their synergies could be good fun.
      </p>
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
      <video autoPlay controls loop muted width="720">
        <source src={WaypointsSceneShowoff} type="video/mp4" />
      </video>
    </Layout>
  );
};

export default TowerDefencePage;
