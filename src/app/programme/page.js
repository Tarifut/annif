import Image from "next/image"
import recto from "../images/recto.png";
import verso from "../images/verso.png";
export default function Programme(){

    return(
        <div className="flex flex-row justify-center align-middle items-center font-sans text-center text-2xl gap-10">
        <p className="w-1/4 h-1/4">
          <Image
            src={recto}
            layout="responsive"
            width={450}
            height={450}
            alt="Polaroid"
          ></Image>
        </p>
        <p className="w-1/4 h-1/4">
          <Image
            src={verso}
            layout="responsive"
            width={450}
            height={450}
            alt="Polaroid"
          ></Image>
        </p>
        </div>
    )
}