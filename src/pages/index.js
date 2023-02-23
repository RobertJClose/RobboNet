import * as React from "react";
import Layout from "../components/layouts/Layout";
import KSPShowoffVideo from "../videos/KSP Companion Showoff.mp4";
import KSPDetailedVideo from "../videos/KSP Companion Detailed.mp4";
import WaypointsSceneShowoff from "../videos/Quick Turret Waypoint Scene View.mp4"
import HueCityEssayPage from "./projects/hue-city.js";
import HueCityVisualElements from "./projects/images/Hue City Visual Elements.png";
import HueCityChokepointNetwork from "./projects/images/Hue Chokepoint Network.png";
import { ProjectGallery } from "../components/ProjectGallery";

const projectsData = [
  {
    title: "KSP Companion (Prototype)",
    description:
      "A companion tool to be used alongside the game Kerbal Space Program.",
    slug: "ksp-companion-prototype",
  },
  {
    title: "Hue City: A Map Design Case Study In Rising Storm 2",
    description:
      "An essay exploring why a particular map proved so popular in Rising Storm 2.",
    slug: "hue-city",
  },
  {
    title: "Untitled Tower Defence Game",
    description:
      "A fun ongoing project inspired by Risk Of Rain and the Bloons TD flash games.",
    slug: "untitled-tower-defence",
  },
];

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="RobboNet">
      <p>
        Hello there! <br></br>
        This simple site has all the things I've been working on.
      </p>
      <p>
        My{" "}
        <a href="https://github.com/RobertJClose" target="_blank">
          GitHub.
        </a>
      </p>
      <h1>KSP Companion (Prototype)</h1>
      <p>
        This goal of this project was to build a tool that can be used alongside
        the game{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kerbal_Space_Program"
          target="_blank"
        >
          Kerbal Space Program (KSP).
        </a>{" "}
        I've been playing KSP since I was a teenager, and always felt that with
        my blossoming maths and physics skills I could go beyond the
        trial-and-error approach players naturally adopt. When I played KSP I
        knew I wanted to experience the same intensely high stakes that real
        space agencies face. You <i>must</i> know before launch if your design
        can achieve the mission objectives, but rocketry is so expensive that
        you <i>cannot</i> waste precious resources. At university I built some
        MATLAB tools, but always dreamt of a more complete and user-friendly
        companion to the game; during this project I designed and built the
        prototype for that companion.
      </p>
      <video autoPlay controls loop muted width="720">
        <source src={KSPShowoffVideo} type="video/mp4" />
      </video>
      <h2>Things that went really well:</h2>
      <h3>The Angle Structs</h3>
      <p>
        I'm especially proud of three of the struct/classes I built during this
        project. I created the{" "}
        <a
          href="https://github.com/RobertJClose/KSP-Companion-Prototype/blob/main/Assets/KSP%20Companion/Scripts/Utilities/Anglef.cs"
          target="_blank"
        >
          Anglef
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/RobertJClose/KSP-Companion-Prototype/blob/main/Assets/KSP%20Companion/Scripts/Utilities/Angled.cs"
          target="_blank"
        >
          Angled
        </a>{" "}
        structs to make it simpler to write the large amount of code that worked
        with floating point values that semantically represented angles. Angular
        values are similar to floats and doubles, but with periodic equivalence
        at integer multiples of 2PI. This can make common tasks, such as working
        out if an angle is between two others, more complex. The two angle
        structs have public methods for computing many non-trivial cases such as
        this, and all the tricky equivalence issues are resolved under-the-hood.
        Best of all, angle objects can be implicitly cast (explicitly where
        appropriate) to floating point values, so the syntax for methods
        expecting floats or doubles doesn't change in any way. It's hard to
        state just how much utility and peace of mind I got from these structs
        as I worked on this project, particularly when I created this next
        class.
      </p>
      <h3>The Orbit Class</h3>
      <p>
        The{" "}
        <a
          href="https://github.com/RobertJClose/KSP-Companion-Prototype/blob/main/Assets/KSP%20Companion/Scripts/Orbital%20Stuff/Orbit.cs"
          target="_blank"
        >
          Orbit
        </a>{" "}
        class was the backbone on which the KSP Companion was built, as an Orbit
        object can flexibly represent all three types of{" "}
        <a href="https://en.wikipedia.org/wiki/Kepler_orbit" target="_blank">
          Keplerian orbit.
        </a>{" "}
        I have strong reasons to believe that no class in KSP itself achieves
        this feat, and I believe the complexity of my code would've suffered
        greatly without it. The simple interface of the class provides answers
        for all of the myriad of complex questions you might have about a
        satellite's orbit, while all of tricky mathematics remains hidden in the
        implementation where it belongs. I actually didn't have any lectures on
        orbital mechanics during my four years studying physics, so I sourced a
        textbook and studied{" "}
        <a
          href="https://www.esa.int/gsp/ACT/doc/MAD/pub/ACT-RPR-MAD-2014-RevisitingLambertProblem.pdf"
          target="_blank"
        >
          online academic papers
        </a>{" "}
        in my own time to find efficient and stable algorithms for the many
        transcendental equations that occur in orbital mechanics. While there
        are still some adjustments I might make to its design before committing
        it into a proper library, I found my Orbit class a real pleasure to use.
      </p>
      <h3>Professional Polish and Strategic Programming</h3>
      <p>
        Furthermore, I took the time to put a professional polish to those
        classes. Every public member has a detailed interface comment. Crucial
        details, such the semantic meaning of arguments and return values, the
        units of those values, and any possible exceptions, are described to
        absolute completion. Within the method bodies there are implementation
        comments to improve the readability of the code, as well as to highlight
        any tricky bug-squashing details. This project was my first taste of
        unit testing, and these classes became meticulously well tested. I
        created 313 tests in total, each of them built according to the
        Arrange-Act-Assert design pattern. Some of these tests required long
        handwritten computations in order to check their accuracy, with one
        especially{" "}
        <a href="/images/NotebookHandwrittenTestIterations.png" target="_blank">
          spicy
        </a>{" "}
        algorithm requiring 4 iterations of a 7 step algorithm with ~100
        mathematical operations per iteration. I won't lie, at first I found the
        testing a tedious task that took time away from the "real" programming
        work, but by the end I really appreciated the investment and even
        enjoyed the <i>real</i> programming work that is writing tests. Finally,
        this project was my first taste of git version control. While I
        initially made a lot of generic chunky commits, after some time I
        refined my style to commit logical units with descriptive names. I also
        made better use of branches and GitHub issues as I became more familiar
        the possible git workflows.
      </p>
      <p>
        I have read that these sorts of programming tasks might be described as
        'strategic' programming, as opposed to 'tactical' programming that moves
        fast and breaks things. While I learnt a lot during this project, it was
        an appreciation for strategic programming tasks and their long term
        benefits that has had the greatest impact on my subsequent approach to
        programming, and I love the feeling of reaping those awards as I work on
        projects now.
      </p>
      <video autoPlay controls loop muted width="720">
        <source src={KSPDetailedVideo} type="video/mp4" />
      </video>
      <h2>Things to be done differently:</h2>
      <p>
        At the time, this project was the largest programming project I'd ever
        embarked on, encompassing some 7,000 lines of code by the end. When
        working from online tutorials, you usually create small units of code
        that solve a single small problem. This is fine, but it means that
        problems of scale can be a bit of a blind spot for you. With this in
        mind, I did do some reading on software architecture, design, and UML
        before writing any code, but I still struggled to keep the complexity of
        my code under control as the lines accumulated. If I were to complete
        this project again, I think I'd structure the code differently to
        improve the scalability of my code. I also think I could've made better
        use of Unity's GameObject/Component based structure. I think I found it
        difficult to resolve{" "}
        <a
          href="http://blog.13pixels.de/2019/using-components-instead-of-inheritance-in-unity/"
          target="_blank"
        >
          the tension
        </a>{" "}
        between Unity's flat hierarchy and the inheritance-focused OOP learning
        I had done previously. I understand the purpose and strengths of a
        MonoBehaviour object much better now, and leaning more heavily into that
        will probably help me with my scale issues as well.
      </p>
      <h1>Hue City: A Map Design Case Study In Rising Storm 2</h1>
      <p>
        While most of my time is spent learning how to program the games I wish
        existed, I also spend a lot of time thinking about the extant games I
        love and what it is about them that I admire. Most of these thoughts
        stay in my head, or are forced upon my poor disinterested friends, but
        after the KSP Companion I wanted to do something a bit different, and so
        I started to put into words some of my thoughts about one of my
        favourite FPS maps: Rising Storm 2's <i>Hue City</i>.
      </p>
      <p>
        The resulting essay is in my thorough and analytical style, and touches
        upon not just the design of the map itself, but also related contextual
        details such as where Rising Storm 2 sits in the ever evolving FPS
        tradition, and how we might design maps for these games in the future. I
        will summarise the main arguments and copy the conclusion out verbatim
        here. If you feel tempted to read the whole essay, you may do so HERE.
      </p>
      <h2>Summary</h2>
      <p>
        In Rising Storm 2, the map Hue City is an absolute blast. The fighting
        is incredibly intense for both attackers and defenders, and when the
        game was first released players would often vote to play in Hue at every
        possible opportunity. I belive that the reason for this popularity lies
        in the interaction between the design of the map and the design of the
        game itself.
      </p>
      <h3>The Impact Of A Shooter's Time-To-Kill</h3>
      <p>
        Rising Storm 2 differs from most other first-person shooters in that it
        attempts to simulate realistic bullet damage, often resulting in players
        being killed by a single hit. This puts the game at the extreme low-end
        of the time-to-kill (<b>TTK</b>) spectrum of shooter games, which
        classifies games according to how much time it takes, on average, for a
        player to kill another player. The TTK of a shooter often leads to many
        of the characteristic features of the game. For example, the huge TTK of
        games such as Overwatch and Team Fortress 2 enable those games to offer
        their extremely diverse character sets, as engagements in low TTK
        shooters are often very sensitive to differences between the combatants'
        health, armour, or weaponry. Another distinctive example is the high TTK
        Halo, where skilled players make use of <i>teamshotting</i> and{" "}
        <i>weaponcomboing</i> to maximise their opponents TTK while minimising
        their own.
      </p>
      <p>
        What is important to Rising Storm 2 is that as TTK decreases, the
        relative strength of defenders against attackers increases. With a high
        TTK, a player under fire has time to reposition to the next piece of
        cover. Several attackers moving together may simply have too much health
        for their traversal to be blocked. With a low TTK, even a single well
        positioned defender can block the movement of many attackers at once.
        Thus, matches in Rising Storm 2 often break down into a sequences of
        chokepoint engagements, with the progress of attackers occurring as
        checkpoints towards their objective.
      </p>
      <h3>Hue City's Chokepoint Network</h3>
      <p>
        This is why Hue City is such a successful map: it offers a sequence of
        well-designed chokepoints, that are simple for the defenders to
        establish and interesting for the attackers to assault. The simplicity
        is important because, unfortunately, there is often a lack of
        communication within teams in Rising Storm 2. Inability to establish
        chokepoints is a frequent fatal failure by defending teams in Rising
        Storm 2, so games are often too brutal for the defenders and too short
        and easy for the attackers. Once the map meets the basic combat
        expectations of the players, it then offers attackers a diverse and
        interesting set of choices to their approach. To show this more easily,
        I came up with a diagrammatic way of displaying the network of
        chokepoints. Using these visual elements:
      </p>
      <img src={HueCityVisualElements} width="400" />
      <p>
        We can now examine the chokepoint network of a section of Hue City in
        greater detail:
      </p>
      <img src={HueCityChokepointNetwork} width="800" />
      <p>
        This diagram represents the attackers' approach to capture zone C on Hue
        City. First of all, when we examine the capture zone itself we see that
        it's simple for defenders to establish a firm basic resistance. There
        are only 8 chokepoints into the capture zone, and with teams of 32 these
        are usually swiftly occupied. From there, we break the approach down
        into four sections. This is helpful because combat in each of the
        sections is largely independent, and because the combat in each section
        has its own character. Studying the sections in isolation reveals the
        interesting choices that attackers have during their approach to the
        capture zone.
      </p>
      <p>
        The left and right flanks are the main avenues for the assault. There's
        lots of space and potential throughput of attackers, and several ways
        into the capture zone. The left flank features a large bastion wall,
        from which defenders can fire upon attackers in nearby sections. This
        makes the left flank an important target for the attackers, as
        disrupting the bastion can help allies across the map. The right flank
        gives attackers safer routes to the centre and then even the left flank.
        Breakthroughs from these flanks are massively disruptive to the
        defenders, and will often lead to the capture zone falling.
      </p>
      <p>
        The centre and the tunnel are a bit different. The centre is the most
        direct route into the capture zone, but it's risky as the approach is
        very exposed. Instead, players will often advance up the right flank and
        move into the centre from there. This redistributes some potentially
        redundant attackers to sections of the defence that might be softer. The
        tunnel has a simple linear sequence of chokepoints. Progress in the
        tunnel is usually costly but very stable, and pressure from the tunnel
        typically builds over time to undermine the long term stability of the
        defence. However, the total throughput of soldiers is low. Breakthroughs
        from the centre or the tunnel rarely lead to a capture on their own, but
        instead they can boost the momentum of breakthroughs in the flanks.
      </p>
      <p>
        In summary, this capture zone is simple to defend and interesting to
        attack. There's a diversity in how attackers want to conduct their
        assault, and players can expect their experience to change from game to
        game. This is true for the other capture zones throughout the map. It
        makes for some memorable experiences and keeps players hungry for more.
      </p>
      <h3>What We Can Learn From Hue City</h3>
      <p>So what can we take forward from the design of Hue City?</p>
      <p>
        First of all, Hue City succeeds because the high-level strategic choices
        for players are interesting. Within a single capture zone, there can be
        a variety of experiences. Throughout a map, the capture zones themselves
        can offer a variety of experiences as well.
      </p>
      <p>
        Secondly, on a small scale Hue City delivers those experiences with
        precision. There's no careless placement of obstacles, cover, or
        chokepoints. Strategically important elements such as capture zones and
        ammo boxes are well placed as well. Even small changes to these elements
        can have big impacts, and I believe many other maps in the game feature
        capture zones whose boundaries are exploited by experienced players.
      </p>
      <p>
        Finally, the popularity of Hue City is the result of the design of
        Rising Storm 2 itself. Whereas the previous points are specifically
        about map design, this point is more about how the rest of the game's
        design can empower map designers to have greater freedom and creativity.
        Hue City's uniquely extreme expression of urban combat makes it easy for
        emergent teamplay to occur, even in the context of Rising Storm 2's
        largely uncoordinated teams. Along with a lack of communication, there
        is generally a lack of coordination within the 6 man squads that every
        player is nominally a part of of. Rather than act as units under the
        direction of the team leader, players in squads often play
        independently. Several FPS games have made innovative changes however,
        and adopting them could then enable map designers to ask more complex
        strategic questions of teams. For example, <i>Overwatch</i> has its
        'kudos' system to promote sporting behaviour. It also allows players to
        queue for particular roles within the team, allowing the empowered
        matchmaking system to more reliably deliver the embryo of a cohesive
        team. <i>Squad</i> and <i>Hell Let Loose</i> feature the milestone
        innovation of having a separate chat channel for the team leader and
        their squad leaders. Finally, <i>Verdun</i> and <i>Post Scriptum</i>{" "}
        wisely predefine what type of soldiers make up each squad, solving the
        common issue in Rising Storm 2 of squads either being a mix of
        uncomplementary specialised weaponry or almost exclusively riflemen with
        little specialised support.
      </p>
      <h2>Conclusion (Verbatim)</h2>
      <p>
        Rising Storm 2's idiosyncratic damage mechanics, inherited from its
        ancestor Red Orchestra, bring unique challenges to the task of map
        design. The ability for defenders to establish strong killzones from
        well protected positions makes them far more powerful than in other
        first-person shooters, and just a few veteran players may prove to be an
        insurmountable obstacle to the inexperienced. Many of the game's maps
        struggle to reliably create a lasting combat experience that satisfies
        both teams, and it is in this environment that Hue City achieves
        unparalleled yet controversial popularity. Understanding why Hue City
        proved so popular can help designers create better maps and even better
        games for us to enjoy.
      </p>
      <p>
        What we have seen is that Hue City is a map that makes it easy for
        defenders to establish firm resistance. Once that base for the
        experience is in place, it then offers attackers interesting options for
        assaulting that defence. Progress to the attackers can occur in diverse
        ways, with some paths offering costly major breakthroughs while others
        undermine the long term stability of the defenders. The narrowness of
        the design makes the map a uniquely extreme expression of close-quarters
        combat, and, in the context of Rising Storm 2's uncoordinated teams,
        that makes it simple for teamwork to occur even from teams of silent
        individuals. The result is a map that provides an engrossing combat
        experience, full of memorable encounters in a diverse variety of forms.
      </p>
      <p>
        While Red Orchestra was once the choice of a niche corner of the gaming
        community, it has since inspired an increasing number of new releases
        with growing financial backing. As Red Orchestra's descendants continue
        to grow in popularity, the designers in this realm will benefit from
        exemplary successes like Hue City as they push this blossoming corner of
        the otherwise ripened shooter world to its full potential. While it is
        not clear how much growth is still possible, I personally hope that one
        day a critical mass of popular appeal will be reached, such that a
        studio feels ready to launch a refined esports experience for this
        subgenre. This has already happened for games across the rest of the TTK
        spectrum, with unprecedented returns. If that lucrative milestone can be
        reached, I hope that the memory of Hue City and the other popular maps
        of today will live on through the competitive arenas of the future.
      </p>
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
        tedious. I understand better now that an important part of being a good
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
        however. I wanted user to be able to use the component entirely within the 
        Scene view via handles and a simple GUI. From the Scene view GUI each waypoint
        can be renamed, moved about, and have its connections edited. Handles in the 
        Scene view provide the easier way of manipulating waypoints and their connections 
        however. There are hotkeys to make editing really fast, and the component is 
        totally integrated with the Unity Editor's Undo system.
      </p>
      <video autoPlay controls loop muted width="720">
        <source src={WaypointsSceneShowoff} type="video/mp4" />
      </video>
      <ProjectGallery projectsData={projectsData} />
    </Layout>
  );
};

export default IndexPage;
