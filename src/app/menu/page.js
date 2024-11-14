import Image from "next/image";

import menu from "../images/menu.png";
import sep from "../images/sep.png";

export default function Menu() {



    return (
        <>

<div className="flex items-center flex-col  gap-4 justify-center ">
      <p className="w-1/6 h-1/6">
          <Image
            src={menu}
            layout="responsive"
            width={450}
            height={450}
            alt="menu"
          ></Image>
        </p>
        <section className="text-4xl pt-10">Charcuteries</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-4xl">Cochon de lait à la broche et ses légumes</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-4xl">Fromages</section>
        <p className="w-1/6 h-1/6">
          <Image
            src={sep}
            layout="responsive"
            width={450}
            height={450}
            alt="sep"
          ></Image>
        </p>
        <section className="text-4xl">Flan Patissier</section>
      </div>
           
        </>
    )
}