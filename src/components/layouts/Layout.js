import styled from "styled-components";
import React from "react";
import { Navbar } from "../Navbar";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./layout.css";

const PageWrap = styled.main`
  max-width: 1024px;
  margin: 2rem auto;
  text-align: center;
`;

const ContentWrap = styled.div`
  padding: 1rem;
`;

export default function Layout({ children, pageTitle }) {
  return (
    <PageWrap>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <h1>
        <Link to="/">RobboNet</Link>
      </h1>
      <Navbar></Navbar>
      <ContentWrap>{children}</ContentWrap>
      <footer>
        <p>
          Email: RobertClose@ProtonMail.com <br/>
          GitHub: <a href="https://github.com/RobertJClose" target="_blank">https://github.com/RobertJClose</a>
        </p>
        <p>
          This website was built and deployed with React, Gatsby, and Netlify. The videos on the website 
          were edited with Shotcut.
        </p>
      </footer>
    </PageWrap>
  );
}
