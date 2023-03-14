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
    title: "Untitled Tower Defence Game",
    description:
      "A fun ongoing project inspired by Risk Of Rain and the Bloons TD flash games.",
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
      <h1>Bio:</h1>
      <p>
        Hello there! My name is Robbie.<br></br>
        My aim is to start a career in the computer games industry, and this
        website presents my portfolio of projects. You may also find more on{" "}
        <a href="https://github.com/RobertJClose" target="_blank">
          my GitHub.
        </a>{" "}
        After graduating with an MSci in theoretical physics from the University
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
      <p>
        The website itself was built using the React Javascript library, and
        deployed using Netlify. The videos on the website were edited with
        Shotcut.
      </p>
      <h1>My Projects:</h1>
      <ProjectGallery projectsData={projectsData} />
      <h1>Robbo the Gamer:</h1>
      <video autoPlay controls loop muted width="720">
        <source src={HomePageVideo} type="video/mp4" />
      </video>
    </Layout>
  );
};

export default IndexPage;
