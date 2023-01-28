import Layout from "@/components/common/Layout/Layout";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import React from "react";

const Games = () => {
  return (
    <Container>
      <div>
        <Link href="/games/sprint">Sprint</Link>
      </div>
      <div>
        <Link href="/games/audio-call">AudioCall</Link>
      </div>
    </Container>
  );
};

export default Games;

Games.Layout = Layout;
