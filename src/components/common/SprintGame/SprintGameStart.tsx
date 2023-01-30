import React from "react";
import Layout from "../Layout/Layout";
import SprintGameShoes from "../../../images/Sprint-game-shoes.png";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";

const SprintGameStart = () => {
  return (
    <Container>
      <div className="p-5 bg-primary-white rounded-xl mt-8 mb-10">
        <div className="flex flex-col">
          <Image
            className="mx-auto"
            quality={100}
            width={80}
            height={80}
            src={SprintGameShoes}
            alt="SprintGameShoes"
          />
          <h3 className="mx-auto text-2xl font-extrabold mb-2 mt-3">Sprint</h3>

          <p className="text-center text-gray-dark font-bold">
            Trains the skill of fast translation. You have to choose if the
            translation corresponds to the suggested word.
          </p>

          <div>
            <p className="text-center text-gray-dark font-bold mt-5 mb-2">
              Chose a level
            </p>
            <div className="flex justify-around mb-5">
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                A1
              </button>
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                A2
              </button>
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                B1
              </button>
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                B2
              </button>
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                C1
              </button>
              <button className="w-11 h-11 rounded-full border-4 bg-transparent border-green-secondary">
                C2
              </button>
            </div>
            <div className="text-center">
              <Link href="/games/sprint/start">
                <Button textColor="text-primary-white" bgColor="bg-cayan-dark">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SprintGameStart;
