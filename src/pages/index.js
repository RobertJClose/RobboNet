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
      <ProjectGallery projectsData={projectsData} />
      <video autoPlay controls loop muted width="720">
        <source src={HomePageVideo} type="video/mp4" />
      </video>
    </Layout>
  );
};

export default IndexPage;
