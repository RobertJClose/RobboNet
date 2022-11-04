import * as React from "react";
import Layout from "../../components/layouts/Layout";

const HueCityPage = () => {
  return (
    <Layout pageTitle="RobboNet: Hue City Case Study">
      <h1>Hue City: A Map Design Case Study In Rising Storm 2</h1>
      <p>This essay examines the design of a very popular map in one of my favourite shooters: <a href="https://en.wikipedia.org/wiki/Rising_Storm_2%3A_Vietnam" target="_blank">Rising Storm 2.</a></p>
      <p>While my other projects focus on software engineering, this essay should instead highlight the way I think about games and their design problems.</p>
      <iframe
        width="100%"
        height="700"
        src={"/docs/hue-city-a-map-design-case-study.pdf#zoom=100"}
      ></iframe>
    </Layout>
  );
};

export default HueCityPage;
