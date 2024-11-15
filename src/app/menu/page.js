import Image from "next/image";

import menu from "../images/menu_a.png";


export default function Menu() {

const styleSep="w-screen h-screen md:w-1/2 md:h-1/2"


    return (
        <>

<div className="flex items-center justify-center ">
      <p className={styleSep}>
          <Image
            src={menu}
            layout="responsive"
            width={450}
            height={450}
            alt="menu"
          ></Image>
        </p>
        
      </div>
           
        </>
    )
}