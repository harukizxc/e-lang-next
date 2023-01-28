import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import rupor from "../../../images/rupor.png";

const Audiocall = () => {
  return (
    <Container>
      <div className="p-5 bg-primary-white rounded-xl mt-8 mb-10">
        <div className="flex flex-col">
          <Image
            className="mx-auto"
            quality={100}
            width={80}
            height={80}
            src={rupor}
            alt="SprintGameShoes"
          />
          <h3 className="mx-auto text-2xl font-extrabold mb-2 mt-3">
            Audio-Call
          </h3>

          <p className="text-center text-gray-dark font-bold">
            The Audio-Call training develops vocabulary and improves listening
            comprehension.
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
              <Link href="/">
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

export default Audiocall;
