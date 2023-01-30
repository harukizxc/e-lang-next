import Container from "@/components/ui/Container/Container";
import logo from "../../../images/GlobalTalk.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Usernav from "../UserNav/Usernav";
import userIco from "../../../images/user-ico.svg";

const Navbar = () => {
  const [close, setClose] = useState<boolean>(true);

  useEffect(() => {
    console.log(close);

    if (close) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [close]);

  const NavbarCloseHandler = () => {
    setClose(!close);
  };
  return (
    <Container>
      <div className="grid grid-cols-[min-content_minmax(150px,1fr)_50px] py-6 sm:grid-cols-[180px_1fr_minmax(min-content,250px)]  ">
        <Link
          onClick={() => setClose(!close)}
          href="/"
          className=" col-start-2  mt-2 mx-auto md:col-start-1 md:mt-3"
        >
          <Image className="" src={logo} alt="logo" />
        </Link>

        <div className=" space-x-10 mt-2 row-start-1 md:col-start-2 md:mx-0 ">
          <nav className="hidden space-x-6  md:block">
            <Link className=" text-primary-black font-bold" href="/">
              Home
            </Link>
            <Link className=" text-gray-dark" href="/textbook">
              Textbook
            </Link>
            <Link className=" text-gray-dark" href="/statistics">
              Statistics
            </Link>
            <Link className=" text-gray-dark" href="/games">
              Games
            </Link>
          </nav>

          <div
            style={{ marginLeft: "25px" }}
            className="block md:hidden"
            onClick={NavbarCloseHandler}
          >
            {close ? (
              <div>
                <div className=" w-8 mb-1 h-1 bg-primary-black rounded-xl"></div>
                <div className=" w-6 mb-1 h-1 bg-primary-black rounded-xl"></div>
                <div className=" w-4 mb-1 h-1 bg-primary-black rounded-xl"></div>
              </div>
            ) : (
              <div onClick={() => setClose(false)} className="z-20">
                <div className=" w-8  h-1 bg-primary-black rounded-xl rotate-45 "></div>
                <div className=" w-8 -mt-1 h-1 bg-primary-black rounded-xl -rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        <div className="col-start-3 p-0 md:mx-0">
          <div className="hidden sm:block">
            <Usernav />
          </div>
          <div className="block  mt-1 sm:hidden">
            <Image
              className="ml-6"
              width={25}
              height={25}
              src={userIco}
              alt="userIco"
            />
          </div>
        </div>
      </div>
      {!close && (
        <div>
          <div className="w-full h-screen space-y-5 fixed  left-0 bg-gray-dark flex flex-col justify-center items-center z-50">
            <Link
              onClick={() => setClose(!close)}
              className=" text-primary-white font-bold"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setClose(!close)}
              className=" text-primary-white"
              href="/textbook"
            >
              Textbook
            </Link>
            <Link
              onClick={() => setClose(!close)}
              className=" text-primary-white"
              href="/statistics"
            >
              Statistics
            </Link>
            <Link
              onClick={() => setClose(!close)}
              className=" text-primary-white"
              href="/games"
            >
              Audiocall
            </Link>
            <Link
              onClick={() => setClose(!close)}
              className=" text-primary-white"
              href="/games"
            >
              Sprint
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
