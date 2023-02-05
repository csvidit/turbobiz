import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Categories from "./Categories";
import Image from "next/image";

const Main = () => {
  return (
    <div className={"w-screen h-screen flex flex-row"}>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center pl-10">
        <Title size="sm">Choose a Category</Title>
        <Categories/>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center relative invisible lg:visible">
        <Image src="/unsplash-3.jpg" fill={true} alt="Yellow abstract" />
      </div>
    </div>
  );
};

export default Main;
