import * as React from "react";
import Layout from "../../components/layouts/Layout";
import TDImage from "./images/TD Screenshot.png"
import styled from "styled-components";

const StyledImage = styled.img`
  width: 800px;
  height: 400px;
`;

const TowerDefencePage = () => {
  return (
    <Layout pageTitle="RobboNet: Untitled Tower Defence Game">
      <h1>Untitled Tower Defence Game</h1>
      <p>
        This is very much a work in progress, but a fun one. I was playing Risk Of Rain 2 and BloonsTD 4 and finding a lot of fun in the synergies that both games use, so I thought about combining them.
      </p>
      <p>
        It's not complete to the point of being an actual interactive game, but you can see what's been done so far <a href="https://play.unity.com/mg/other/first-published-build" target="_blank">here.</a>
      </p>
      <StyledImage src={TDImage}></StyledImage>
    </Layout>
  );
};

export default TowerDefencePage;
