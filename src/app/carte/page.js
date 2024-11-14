import Image from "next/image";

import carte from "../images/carte.png";
import sep from "../images/sep.png";


export default function Carte() {



    return (
        <>

<div className="flex items-center flex-col  gap-4 justify-center ">
      <p className="w-1/6 h-1/6">
          <Image
            src={carte}
            layout="responsive"
            width={450}
            height={450}
            alt="carte"
          ></Image>
        </p>
        <section className="text-2xl pt-10">Ricard</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-2xl">Vodka</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-2xl">Tequila</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-2xl">Bière pression Mandala de la Brasserie d'Olt</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-2xl">Vins</section>
      </div>

           
        </>
    )
}