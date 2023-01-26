import Container from "@/components/ui/Container/Container";
import logo from "../../../images/GlobalTalk.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Usernav from "../UserNav/Usernav";

const Navbar = () => {
  return (
    <Container>
      <div className="flex flex-row py-8">
        <Link href="/">
          <Image className=" mr-16 mt-1" src={logo} alt="logo" />
        </Link>
        <nav className="flex flex-row space-x-10">
          <Link className="text-primary-black" href="/">
            Home
          </Link>
          <Link className="text-gray-dark" href="/textbook">
            Textbook
          </Link>
          <Link className="text-gray-dark" href="/statistics">
            Statistics
          </Link>
          <Link className="text-gray-dark" href="/games">
            Games
          </Link>
        </nav>
        <div className="flex flex-1 justify-end">
          <Usernav />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
