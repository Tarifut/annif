"use client";

import "../globals.css";
//import Confetti from 'react-confetti-boom';


import Image from "next/image";


import pola from "../images/pola.png";
import cochon from "../images/pola_cochon.png";




export default function Home() {
  

  return (
    <>
      
      <h1 className="m-4 2xl:text-6xl lg:text-4xl sm:text-2xl text-center">
        Anniversaire Adeline et Vincent
      </h1>

      

      <div className="flex items-center flex-wrap gap-4 justify-center ">
        <p className="w-1/4 h-1/4">
          <Image
            src={pola}
            layout="responsive"
            width={450}
            height={450}
            alt="Polaroid"
          ></Image>
        </p>

        

        <p className="w-1/4 h-1/4">
          <Image
            src={cochon}
            layout="responsive"
            width={450}
            height={450}
            alt="Polaroid"
          ></Image>
        </p>

        
      </div>
    </>
  );
}
