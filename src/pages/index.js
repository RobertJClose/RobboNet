import * as React from "react";
import Layout from "../components/layouts/Layout";
import { ProjectGallery } from "../components/ProjectGallery";

const projectsData = [
  {
    title: "Hue City: A map design case study in Rising Storm 2",
    description: "I talk about things related to the Rising Storm 2 map",
    slug: "hue-city",
    date: "2022-11-03",
  },
  {
    title: "KSP",
    description: "I talk about things related to the Rising Storm 2 map",
    slug: "ksp",
    date: "2022-11-03",
  },
];

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="RobboNet">
      Hello there
      <ProjectGallery projectsData={projectsData} />
    </Layout>
  );
};

export default IndexPage;
