import Image from "next/image";

import carte from "../images/boissons_a.png";


export default function Carte() {

const styleSep="w-screen  h-screen md:w-1/2 md:h-1/2"

    return (
        <>

<div className="flex items-center justify-center ">
      <p className={styleSep}>
          <Image
            src={carte}
            layout="responsive"
            width={450}
            height={450}
            alt="carte"
          ></Image>
        </p>
        
      </div>

           
        </>
    )
}