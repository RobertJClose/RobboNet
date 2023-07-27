import * as React from "react";
import HomePageVideo from "../videos/HomePageCompilation.mp4";
import Layout from "../components/layouts/Layout";
import { ProjectGallery } from "../components/ProjectGallery";

const projectsData = [
  {
    title: "KSP Companion (Prototype)",
    description:
      "A companion tool to be used alongside the game Kerbal Space Program.",
    slug: "ksp-companion-prototype",
  },
  {
    title: "Quick Turret (Tower Defence Project)",
    description:
      "My best work, this project was inspired by Risk Of Rain and the Bloons TD flash games.",
    slug: "untitled-tower-defence",
  },
  {
    title: "Hue City: A Map Design Case Study In Rising Storm 2",
    description:
      "An essay exploring why a particular map proved so popular in Rising Storm 2.",
    slug: "hue-city",
  },
];

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="RobboNet">
      <h2>Bio:</h2>
      <p>
        Hello there! My name is Robert, but most people call me either Robbie or Robbo.
        <br/>
        <br/>
        My aim is to start a career in the computer games industry, and this
        website presents my portfolio of projects.
        <br/>
        <br/>
        After graduating with a first class MSci in theoretical physics from the University
        of Nottingham, and then being waylaid by the pandemic, I started
        teaching myself programming through the Unity game engine.
      </p>
      <p>
        I'd say that my greatest asset is that I am very patient and ruthlessly
        tenacious. It is these two qualities that I try to leverage to win at
        games, and they have been indispensable to me as I've taught myself
        programming. I like to learn with a systematic and layered approach that
        starts from fundamentals, before I get to the more immediately rewarding
        tutorials that tackle some prestigious obstacle. I feel that my approach
        gives my progress and eventual success a sense of inevitability, and I
        find it incredibly satisfying watching that process unfold. I use
        note-taking as part of my learning process, and I've filled ~960 pages
        of A5 notebooks since starting my programming journey. I have since
        migrated to Obsidian personal knowledge management software to keep my
        notes and thoughts organised as I roll towards the start of my career.
      </p>
      <h2>My Projects:</h2>
      <ProjectGallery projectsData={projectsData} />
      <h2>Robbo the Gamer:</h2>
      <p>
        In my opinion, the first Dark Souls is the greatest game of all time. I
        think it's a great example of games as an art form, and I love the
        immense originality and creativity of its design. I find the world and
        the combat deeply immersive, and I've had so many incredibly unique and
        memorable experiences in the multiplayer. The game has long been a major
        source of inspiration for me. My favourite shooter is Rising Storm 2,
        another game with an unconventional design that focuses on immersion. A
        lot of indie games, particularly roguelikes, also occupy my list of
        favourites. I think Risk of Rain 2 is really exceptional, and I've also
        enjoyed Enter The Gungeon, FTL: Faster The Light, Battle Brothers,
        Bomber Crew, the immaculate Celeste, and many more.
      </p>
      <p>
        Usually though I spend more time in strategy games rather than action
        games. I have loved the Total War series since I was a child, although I
        have been somewhat estranged by the recent titles. More recently I have
        loved the grand strategy games of Paradox Interactive, particularly the
        incredibly unique Crusader Kings II.
      </p>
      <p>
        I also enjoy some retro gaming. I still have my PS2 for playing Burnout
        3, Tekken 3, and a few other games whose timeless designs I find
        inspirational. I regularly maintain and dust the old console to make
        sure it'll last many more years to come. I also use{" "}
        <a href="https://bluemaxima.org/flashpoint/" target="_blank">
          Flashpoint
        </a>{" "}
        to play some of my old favourite flash games - mainly Mud and Blood 2.
      </p>
      <video autoPlay controls loop muted>
        <source src={HomePageVideo} type="video/mp4" />
      </video>
      <p>
        As I mentioned in my bio, I like to use my patience to compete in games.
        That means finding characters and playstyles that I think are flexible
        enough to have an answer for every aggresive question. I then try to
        calmly withstand pressure while I push towards a position where I have
        the advantage. I think people find me incredibly frustrating to play
        against, and I confess that I get a lot of pleasure and confidence when
        I detect that my opponent cannot handle my playstyle mentally. My
        favourite battleground for this is Dark Souls, but I've also used this
        method in chess, FIFA, Rocket League,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Wargame%3A_Red_Dragon"
          target="_blank"
        >
          Wargame
        </a>
        , and many single player strategy games.
      </p>
      <p>
        The above might make it sound like I am a ruthless competitor, and
        that's true. Given this fact, and the nature of the games mentioned
        above, it might be easy to assume that I not very sporting, but this is
        far from the truth. I love competing for the sake of the game, and I
        always try to be magnanimous in both victory and defeat. In my opinion,
        a merciless pursuit of victory is done out of respect to the skills of
        the opponent, not as an act of disrespect. You will never,{" "}
        <strong>
          <em>ever</em>
        </strong>
        , catch me putting down a teammate who has made a mistake, or
        disrespecting an opponent who has frustrated my style. If you're really that desperate to
        win, and if you truly love and respect the game you're playing, you'll
        accept whatever has happened and keep trying your best - in my
        experience, this attitude guides you back onto the path of victory
        anyway.
      </p>
    </Layout>
  );
};

export default IndexPage;
