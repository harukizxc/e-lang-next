import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React from "react";
import boy from "../images/casual-3d-boy.png";
import womanWithTablet from "../images/woman-with-tablet.png";
import girlWithBooks from "../images/girl-with-books.png";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between mt-20">
        <div className="firstBlock">
          <div className="leftContainer">
            <p className="mb-6 text-cayan-dark tracking-wide font-medium uppercase">
              e-course platform
            </p>
            <div className=" ">
              <h1 className="font-bold text-6xl w-98">
                Learning and teaching online, made easy
              </h1>
            </div>
            <p className="mt-9 mb-12 w-80">
              Gain subject certification or earn money while teaching online
              with GlobalTalk.
            </p>
            <div className="mb-12">
              <Button textColor="text-cayan-dark" bgColor="bg-cayan-light">
                Learn more
              </Button>
            </div>
            <div className="flex ">
              <div>
                <span>
                  700<span>+</span>
                </span>
                Hours of content
              </div>
              <div>575k+ GlobalTalk Users</div>
            </div>
          </div>
        </div>
        <div className="rightContainer mb-24">
          <Image width={500} height={580} src={boy} alt="boy" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <Image src={womanWithTablet} alt="womanWithTablet" />
        </div>
        <div className="items-end">
          <h2 className=" font-bold text-6xl w-98 mb-9 ">
            Learn a language in a playful way
          </h2>
          <p>Make learning words more fun with mini-games</p>
        </div>
        <div className="games"></div>
      </div>

      <div className="flex justify-between items-center mt-20">
        <div className="rightblock">
          <h2 className="font-bold text-6xl w-98 mb-7">
            Increase your vocabulary
          </h2>
          <p className="mb-8 w-80">
            Traditional and new effective approaches to word study
          </p>
          <Button textColor="text-cayan-dark" bgColor="bg-cayan-light">
            Textbook
          </Button>
        </div>
        <div className="leftblock">
          <Image src={girlWithBooks} alt="girlWithBooks" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-24">
        <div className="">
          <Image src={womanWithTablet} alt="womanWithTablet" />
        </div>
        <div className="items-end">
          <h2 className=" font-bold text-6xl w-98 mb-9 ">
            Watch your progress every day
          </h2>
          <p>
            Save statistics on your achievements, words learned, and mistakes
          </p>
          <Button bgColor="bg-cayan-light" textColor="text-cayan-dark">
            Statistics
          </Button>
        </div>
      </div>
    </Container>
  );
};
Home.Layout = Layout;

export default Home;
