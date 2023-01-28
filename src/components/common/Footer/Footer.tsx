import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import GT from "../../../images/GT.svg";
import youtube from "../../../images/youtube.svg";
import cat from "../../../images/Cat.svg";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-around ">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Link href="/">Home</Link>
          <Link href="/textbook">Textbook</Link>
          <Link href="/statistics">Statistics</Link>
          <Link href="/">Sprint</Link>
          <Link href="/">Audio-call</Link>
        </div>
        <div className="flex flex-col  sm:flex-row sm:space-x-6">
          <p className="cursor-pointer">Alex</p>
          <p className="cursor-pointer">Gabriel</p>
          <p className="cursor-pointer">Marcus</p>
        </div>
      </div>
      <div className="flex flex-col text-center sm:flex-row sm:space-x-6 sm:justify-between py-10">
        <div className="flex justify-center space-x-4">
          <Image src={youtube} alt="youtube" />
          <Image src={GT} alt="GT" />
          <Image src={cat} alt="Cat" />
        </div>
        <div className="mt-4 sm:mt-0">
          <p>©2023 GlobalTalk. Project for GlobalTalk.</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
