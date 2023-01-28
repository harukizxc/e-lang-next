import Button from "@/components/ui/Button/Button";
import React from "react";

const Usernav = () => {
  return (
    <div className="flex  flex-row space-x-2 justify-end whitespace-nowrap text-sm">
      <Button>Login →</Button>
      <Button textColor="text-primary-white" bgColor="bg-cayan-dark">
        Sign Up
      </Button>
    </div>
  );
};

export default Usernav;
