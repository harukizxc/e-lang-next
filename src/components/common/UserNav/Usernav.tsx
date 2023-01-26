import Link from "next/link";
import React from "react";

const Usernav = () => {
  return (
    <div className="flex flex-row space-x-6">
      <Link href="/">log in</Link>
      <Link href="/">log out</Link>
    </div>
  );
};

export default Usernav;
