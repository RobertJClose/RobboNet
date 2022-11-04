import * as React from "react";
import Layout from "../../components/layouts/Layout";
import ToolImage from "./images/ToolScreenshot.png"
import styled from "styled-components";

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
          This program is a tool to be used alongside the game <a href="https://en.wikipedia.org/wiki/Kerbal_Space_Program" target="_blank">Kerbal Space Program.</a> The tool can calculate orbital trajectories so the player can plan their mission with greater precision.<br></br>
        </p>
        <p>
          You can try out the tool <a href="https://play.unity.com/mg/other/webgl-builds-250807" target="_blank">here.</a><br></br>
          The GitHub repo for the project, with more detail on the design and creation process, can be found <a href="https://github.com/RobertJClose/KSP-Companion-Prototype" target="_blank">here.</a>
        </p>
        <StyledImage src={ToolImage}></StyledImage>
      </article>
    </Layout>
  );
};

export default KSPPage;
