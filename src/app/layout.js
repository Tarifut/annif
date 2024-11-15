
'use client'
import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import { useState,useEffect } from "react";
import Confetti from "react-confetti";
import { useRouter } from 'next/navigation'





const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  variable: "--font-breathing",
  weight: "100 900",
});



export default function RootLayout({ children }) {

  const router = useRouter()

  useEffect(() => {
    router.push('/')
  },[]);
  


  const [showNav, setshowNav] = useState(false)
  

  function handleEnter(){
    setshowNav(true)
    
    }

  return (
    <html className="h-dvh 	">

      <body className={` w-dvh 	h-dvh  bg-black text-white ${breathing.className}  antialiased overflow-x-hidden	`}>

        {!showNav && <button onClick={handleEnter} className="  md:text-9xl text-5xl text-center w-screen h-screen flex items-center justify-center"><p className=" transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300">Entrer</p></button>}


      
        {showNav && <section><Confetti /><nav className="mb-8 ">
          
          
          <ol className=" m-auto  p-4 flex  flex-row  flex-wrap justify-between 2xl:text-2xl lg:text-xl sm:text-lg gap-5">
            <Link prefetch href="/accueil"  className= " transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300"><p className="menuBtn">Accueil</p></Link>
            <Link prefetch href="/menu"  className= " transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300"><p className="menuBtn">Menu</p></Link>
            <Link prefetch href="/carte"  className= " transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300"><p className="menuBtn">Carte des boissons</p></Link>
            <Link prefetch href="/programme"  className= "transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300" ><p className="menuBtn">Programme</p></Link>
            <Link prefetch href="/informations" className= "transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300" ><p className="menuBtn">Informations</p></Link>
          </ol>
        </nav>
        </section>


        }

{showNav && <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>}
        {showNav && children}


      </body>
    </html>
  );
}
