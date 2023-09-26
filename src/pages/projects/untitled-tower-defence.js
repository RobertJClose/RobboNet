import * as React from "react";
import { useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import styled from "styled-components";
import WaypointsSceneShowoff from "./videos/Quick Turret Waypoint Scene View.mp4"
import BlockedCriticalDamageText from "./images/BlockedCriticalDamageText.png";
import SubtargetsImage from "./images/SubtargetGizmos.png";
import AutoloaderImage from "./images/AutoloaderComponent.png";
import { UnityProject } from "../../components/UnityProject";

const TowerDefencePage = () => {
  return (
    <Layout pageTitle="RobboNet: Untitled Tower Defence Game">
      <h1>Quick Turret (Tower Defence Project)</h1>
      <h2>
        <a href="https://github.com/RobertJClose/Quick-Turret" target="_blank">
          GitHub
        </a>
      </h2>
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
      </p>
      <p>
        Risk Of Rain's damage system can handle a plethora of interacting damage
        types being dealt to players, turrets, enemies, and environment features
        all at once in massive quantities. Furthermore, success in Risk Of Rain
        2 involves combining lots of items and player abilities in satisfying
        synergy. Bloons, on the other hand, requires synergy between the
        placement of different turret types and the path the balloons are
        following. This inspired me to start expanding this project, and after
        many iterations this is the latest demo:
      </p>
      <UnityProject
        projectName="QuickTurret 1.0.0"
        style={{ width: 960, height: 540 }}
      />
      <h2>The Systems</h2>
      <p>
        After struggling with scaling complexity in the KSP Companion Prototype,
        I focused this time on creating modular systems that work well with
        Unity's GameObject/Monobehaviour component system. This resulted in the
        following systems:
        <ul>
          <li>
            <a href="#WaypointsSystem">The Waypoints System</a>
          </li>
          <li>
            <a href="#DamageSystem">The Damage System</a>
          </li>
          <li>
            <a href="#TargetingSystem">The Targeting System</a>
          </li>
          <li>
            <a href="#TurretComponents">The Turret Components</a>
          </li>
        </ul>
        The Waypoints, Damage, and Targeting systems are all mutually
        independent of one another, and may be readily reused in another
        project. The turrets and enemies in the demo then use these systems to
        implement their behaviour, along with some bespoke components.
      </p>
      <h3 id="WaypointsSystem">The Waypoints System</h3>
      <h4>
        <a
          href="https://github.com/RobertJClose/Quick-Turret/tree/main/Assets/Quick%20Turret/Waypoints"
          target="_blank"
        >
          GitHub Directory
        </a>
      </h4>
      <p>
        This was the first system to be built. This system is used by the
        enemies to navigate around the path. Originally I had a more complex
        path with many branches, and this system was up to the task of guiding
        enemies towards the end. The Waypoints System has four classes, two of
        which are MonoBehaviour components:
        <ul>
          <li>Waypoint</li>
          <li>WaypointConnection</li>
          <li>Waypoints (MonoBehaviour)</li>
          <li>WaypointsNavigator (MonoBehaviour)</li>
        </ul>
        The Waypoints component stores a list of Waypoint objects, each of which
        has a Vector3 containing its position in the 3D Scene. Each Waypoint
        also keeps a list of WaypointConnection objects, each of which can point
        to another Waypoint. In this way, a directed graph (digraph) is formed.
      </p>
      <p>
        The Waypoints component then integrates said digraph with a Unity
        GameObject, while a WaypointsNavigator component offers a simple API for
        navigating around a graph of Waypoints. The Waypoint and
        WaypointConnection classes are in theory extendable with weights and
        more, enabling custom and complex navigation of the waypoints - I did
        envision 'line-like' and 'area-like' Waypoints to coexist with the
        point-like Waypoints, but in reality implementing this wasn't within the
        scope of the project.
      </p>
      <p>
        I created powerful custom Editor tools for manipulating the Waypoints
        graph. In the Unity Inspector you can change the name, position,
        connections, or delete a Waypoint. The Scene view has custom behaviour
        that's even more powerful however. Via handles you can relocate
        waypoints, append new waypoints, add and remove connections, and split
        connections in half. The Scene view also features a custom GUI can be
        expanded or hidden, and thanks to some hotkeys the Scene view workflow
        is really smooth:
      </p>
      <video autoPlay controls loop muted width={700}>
        <source src={WaypointsSceneShowoff} type="video/mp4" />
      </video>
      <h3 id="DamageSystem">The Damage System</h3>
      <h4>
        <a
          href="https://github.com/RobertJClose/Quick-Turret/tree/main/Assets/Quick%20Turret/DamageSystem"
          target="_blank"
        >
          GitHub Directory
        </a>
      </h4>
      <p>
        To handle the dealing of damage I then created the Damage System. There
        are a few structs and classes composing the Damage System:
        <ul>
          <li>DamageEffect</li>
          <li>DamageType</li>
          <li>Hurtable (MonoBehaviour)</li>
          <li>HurtableStats (ScriptableObject)</li>
        </ul>
        Each DamageEffect instance contains an amount of damage, as well as a
        DamageType variable that indicates if this instance of damage carries
        any special effects. DamageType is an enum with the flags attribute,
        allowing multiple types to be applied at once. DamageEffects can then be
        applied through the <code>Hurt()</code> method on any Hurtable
        component.
      </p>
      <p>
        Using the DamageSystem to deal damage is thus very simple: if you have
        something you want to take damage, give it a Hurtable component; if you
        have something you want to deal damage, have it create DamageEffect
        instances and call <code>Hurtable.Hurt()</code>. When you need your
        other components to react to taking damage (or dying) there are then{" "}
        <code>OnHurt</code> and <code>OnDie</code> events that components can
        subscribe to.
      </p>
      <h4>The DamageText Subsystem</h4>
      <p>
        To visualise dealt damage I also made the DamageText subsystem:
        <ul>
          <li>DamageText (MonoBehaviour)</li>
          <li>DamageTextFactory (MonoBehaviour)</li>
          <li>DamageTextSettings (ScriptableObject)</li>
        </ul>
        A DamageTextFactory component can be placed on a Hurtable GameObject to
        produce prefabs with a DamageText component when the <code>OnHurt</code>{" "}
        event is published. The DamageText component simply handles the tweening
        of the prefab over its lifetime.
      </p>
      <p>
        The DamageTextFactory checks the DamageType of the incoming damage, and
        then uses a DamageTextSettings object to set the appearance of the text
        prefabs. The settings contained in a DamageTextSettings object allow for
        some really nice behaviour, where certain types of damage can take
        priority and override the cosmetic effects of lower priority effects.
        For example, its important that players know when their damage is
        blocked, so dark grey blocked damage has a high priority.
      </p>
      <p>
        With the help of another powerful custom Editor, a DamageTextSettings
        object allows for some cosmetic options to remain unset by an override,
        so the final appearance of a DamageText instance can be a mixture that
        represents several present DamageTypes all at once. A common example of
        this in the demo is blocked-critical damage - the text is styled as
        critical damage, except its colour is overridden to dark grey:
      </p>
      <img
        src={BlockedCriticalDamageText}
        alt="Blocked Critical Damage Text"
        width={300}
      />
      <h3 id="TargetingSystem">The Targeting System</h3>
      <h4>
        <a
          href="https://github.com/RobertJClose/Quick-Turret/tree/main/Assets/Quick%20Turret/TargetingSystem"
          target="_blank"
        >
          GitHub Directory
        </a>
      </h4>
      <p>
        Next we have the Targeting System. This system allows for GameObjects to
        detect potential targets, prioritise between them, and then select one
        of several potential subtargets. It uses the following classes:
        <ul>
          <li>TargetScanner (MonoBehaviour)</li>
          <li>Targetable (MonoBehaviour)</li>
          <li>Subtarget (MonoBehaviour)</li>
          <li>TargetingTag</li>
          <li>TagsAsset (ScriptableObject)</li>
          <li>TagPriorities (ScriptableObject)</li>
        </ul>
        The TargetScanner component scans within a given range at a given
        period, and reports any detected Targetables via an event. If you want a
        GameObject to be detectable, you simply have to give it a Targetable
        component.
      </p>
      <p>
        The default behaviour of the TargetScanner is to sort the detected
        Targetables by their distance to the scanner. However, in order to
        facilitate target prioritisation I then created a system of tags.
        Targetables can be given tags as defined in a TagsAsset object. A
        TagsPriorities object can then be used to sort the Targetables by their
        tags.
      </p>
      <p>
        To make enemies more interesting, I also created the Subtarget
        component. Every Targetable has at least one Subtarget that is
        automatically created on the same GameObject, but more Subtargets can
        also be created and registered with a Targetable either through the
        Inspector or the interface of Targetable. The Subtargets can be moved
        around relative to the origin of the Targetable, and they have their own
        subset of tags and thus options for prioritisation.
      </p>
      <img
        src={SubtargetsImage}
        alt="Containozoid Enemy Subtargets"
        width={400}
      />
      <h3 id="TurretComponents">The Turret Components</h3>
      <h4>
        <a
          href="https://github.com/RobertJClose/Quick-Turret/tree/main/Assets/Quick%20Turret/Turrets/Components"
          target="_blank"
        >
          GitHub Directory
        </a>
      </h4>
      <p>
        Finally, I brought these systems together along with some bespoke
        components to make the turrets. The machine gun, minigun, and sniper
        turrets all use these components with different variable values to
        implement their behaviour:
        <ul>
          <li>TurretController</li>
          <li>TargetScanner (Targeting System)</li>
          <li>AttitudeControlSystem</li>
          <li>Autoloader</li>
          <li>RaycastGun</li>
          <li>BulletTrailFactory</li>
        </ul>
        The minigun and sniper also have some of their own components in order
        to make the barrels of the minigun spin, and to implement the sniper's
        laser sight.
      </p>
      <h4>The Turret Controller</h4>
      <p>
        This component acts as a master controller for all the other components
        on the turrets. By polling the state of the other components, or by
        subscribing to their events, the turret controller can then dispatch
        orders to the other components on the turret.
      </p>
      <h4>The Target Scanner</h4>
      <p>
        This is the TargetScanner component from the Targeting System described
        above. Its task is to periodically scan for nearby Targetables and
        publish a prioritised list of them in an event.
      </p>
      <h4>The Attitude Control System</h4>
      <p>
        Given a particular Subtarget to aim at, this component is responsible
        for calculating and implementing the correct orientation of the turret's
        model. I decided to have all three types of turret use the same base
        structure in their models so that they could have this component in
        common.
      </p>
      <h4>The Autoloader</h4>
      <p>
        I really like the idea in{" "}
        <a href="https://en.wikipedia.org/wiki/War_Thunder" target="_blank">
          WarThunder
        </a>{" "}
        of equipping your aircraft with ammo belts that match the target you are
        hunting. The ammo belt then has a variety of rounds that are cycled
        through periodically.
      </p>
      <p>
        The first thing I did to implement this behaviour was to create a
        ScriptableObject class called AmmoType. Each AmmoType has a name, a
        colour, an amount of base damage, and then a probability of causing any
        particular DamageType of the Damage System. The{" "}
        <code>CreateDamageEffect()</code> method can then be used to create a
        random DamageEffect based on the probabilities defined by that AmmoType.
      </p>
      <p>
        The Autoloader component is then responsible for maintaining an ammo
        belt composed of various AmmoTypes. The{" "}
        <code>DrawChamberedRound()</code> method returns the AmmoType that is
        current chambered while a reload cooldown starts and the belt advances
        to the next round. I made sure that null entries in the AmmoBelt can be
        skipped over until a non-null entry is found - an exception is only
        thrown in the event that all the rounds in the belt are null.
      </p>
      <p>
        There are also methods for manipulating the size and contents of the
        belt, peeking at the currently chambered AmmoType or a round at a given
        index, and resetting the belt back to its first round.
      </p>
      <p>
        Under the hood, the 'ammo belt' is simply a list of AmmoType objects.
        The default Unity property drawer for this was a poor fit, so as a final
        touch I made a really nice UI for manipulating the ammo belt in the
        inspector.
      </p>
      <img src={AutoloaderImage} alt="Autoloader Component Custom Inspector" />
      <h4>The RaycastGun</h4>
      <p>
        This component actually fires at the target. It simply wraps the{" "}
        <code>Physics.Raycast()</code> method such that a degree of spread is
        applied to the bullet and the <code>Hurt()</code> method is called on
        any hit Hurtable.
      </p>
      <h4>The Bullet Trail Factory</h4>
      <p>
        Finally, this component is responsible for creating and styling the
        bullet trail leaving the gun barrel. The effect is not very obvious, but
        if you look closely you can see that the colour of the bullet trail
        reflects the AmmoType of the fired round.
      </p>
    </Layout>
  );
};

export default TowerDefencePage;
