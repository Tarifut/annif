"use client";

import "../globals.css";


import Image from "next/image";


import pola from "../images/pola.png";
import cochon from "../images/pola_cochon.png";

import intro from "../images/intro.png";
import balufette from "../images/balufette.png";

if(window.innerWidth<768){

  const imgs=[]
  imgs.push(pola);
  imgs.push(cochon);
  imgs.push(balufette);

}else{
  const imgs=[]
  imgs.push(pola);
  imgs.push(balufette);
  imgs.push(cochon);
}

export default function Home() {
  


  return (
    <>
      
      <div className="flex items-center flex-wrap gap-4 justify-center ">
      <p className="w-2/3 h-2/3 md:w-1/4 md:h-1/4">
          <Image
            src={intro}
            layout="responsive"
            width={450}
            height={450}
            alt="intro"
          ></Image>
        </p>
      </div>

      <div className="flex items-center flex-wrap gap-0 md:gap-4 justify-center ">
        <p className="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <Image
            src={pola}
            layout="responsive"
            width={450}
            height={450}
            alt="Polaroid"
          ></Image>
        </p>

        <p className="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <Image
            src={window.innerWidth<760?cochon:balufette}
            layout="responsive"
            width={450}
            height={450}
            alt="balufette"
          ></Image>
        </p>

        <p className="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <Image
            src={window.innerWidth<760?balufette:cochon}
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
