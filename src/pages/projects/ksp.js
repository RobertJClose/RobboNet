import * as React from "react";
import Layout from "../../components/layouts/Layout";
import Ksp from "./images/ksp.jpeg";
import styled from "styled-components";

// This is your CSS
// "styled" is a library for styling in JS
// https://styled-components.com/
const StyledImage = styled.img`
  width: 500px;
  height: 300px;
`;

const KSPPage = () => {
  return (
    <Layout pageTitle="Hue City case study - RobboNet">
      <h1>KSP</h1>
      <p>This is my essay about ksp</p>
      <a>My github</a>
      <StyledImage src={Ksp}></StyledImage>
    </Layout>
  );
};

export default KSPPage;
