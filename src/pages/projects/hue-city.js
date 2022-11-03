import * as React from "react";
import Layout from "../../components/layouts/Layout";

const HueCityPage = () => {
  return (
    <Layout pageTitle="Hue City case study - RobboNet">
      <h1>Hue City: A map design case study in Rising Storm 2</h1>
      <p>This is my essay about hue city</p>
      <iframe
        width="100%"
        height="700"
        src={"/docs/hue-city-a-map-design-case-study.pdf#zoom=100"}
      ></iframe>
    </Layout>
  );
};

export default HueCityPage;
