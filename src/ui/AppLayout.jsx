import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "../features/Footer";

const Main = styled.main`
  background-color: white;
`;

const Container = styled.div`
  background-color: white;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Main>
    </>
  );
}

export default AppLayout;
