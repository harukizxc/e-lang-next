import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between mt-24">
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/textbook">Textbook</Link>
          <Link href="/statistics">Statistics</Link>
          <Link href="/">Sprint</Link>
          <Link href="/">Audio-call</Link>
        </div>
        <div className="flex space-x-6">
          <p className="cursor-pointer">Alex</p>
          <p className="cursor-pointer">Gabriel</p>
          <p className="cursor-pointer">Marcus</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-10">
        <div className="flex space-x-4">
          <p className="cursor-pointer">Pic</p>
          <p className="cursor-pointer">Pic</p>
          <p className="cursor-pointer">Pic</p>
        </div>
        <div className="">
          <p>©2023 GlobalTalk. Project for GlobalTalk.</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
