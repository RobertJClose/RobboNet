import * as React from "react";
import Layout from "../../components/layouts/Layout";
import styled from "styled-components";
import KSPShowoffVideo from "./videos/KSP Companion Showoff.mp4";
import KSPDetailedVideo from "./videos/KSP Companion Detailed.mp4";

const StyledImage = styled.img`
  width: 1000px;
  height: 400px;
`;

const KSPPage = () => {
  return (
    <Layout pageTitle="RobboNet: KSP Companion (Prototype)">
      <article>
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
      </article>
    </Layout>
  );
};

export default KSPPage;
