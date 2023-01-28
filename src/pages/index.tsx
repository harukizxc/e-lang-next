import Layout from "@/components/common/Layout/Layout";
import SprintGameStart from "@/components/common/SprintGame/SprintGameStart";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import React from "react";
import StartPage from "../components/common/Home/StartPage";

const Home = () => {
  return (
    <Container>
      <>
        <StartPage />
        {/* <SprintGameStart /> */}
      </>
    </Container>
  );
};

Home.Layout = Layout;

export default Home;
