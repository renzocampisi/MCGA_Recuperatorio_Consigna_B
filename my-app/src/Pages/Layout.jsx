import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Layout = () => {
  return (
    <ContLayout>
      <Nav />
      <div className="cont-page">
        <Outlet  />
      </div>
      <footer>Footer</footer>
    </ContLayout>
  );
};

export default Layout;

const ContLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .cont-page{
      height: 100%;
  }

  footer{
    height: 80px;
  }
`;
