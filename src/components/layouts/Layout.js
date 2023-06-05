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
    </PageWrap>
  );
}
