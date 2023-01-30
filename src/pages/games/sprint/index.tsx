import Layout from "@/components/common/Layout/Layout";
import SprintGameStart from "@/components/common/SprintGame/SprintGameStart";
import React from "react";

const Sprint = () => {
  return (
    <div className="max-w-md mx-auto">
      <SprintGameStart />
    </div>
  );
};

export default Sprint;

Sprint.Layout = Layout;
