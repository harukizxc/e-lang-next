import React from "react";
import HeaderBlock from "./HomeBlocks/HeaderBlock";
import FirstBlock from "./HomeBlocks/FirstBlock";
import SecondBlock from "./HomeBlocks/SecondBlock";
import ThirdBlock from "./HomeBlocks/ThirdBlock";

const StartPage = () => {
  return (
    <div className="mt-10 md:mt-24">
      <HeaderBlock />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  );
};

export default StartPage;
