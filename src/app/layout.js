
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
    <html className="h-screen	">

      <body className={`p-4 w-screen	h-screen bg-black text-white ${breathing.className}  antialiased overflow-x-hidden	`}>

        {!showNav && <button onClick={handleEnter} className="  2xl:text-9xl lg:text-7xl sm:text-5xl text-center w-screen h-screen flex items-center justify-center"><p className=" transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300">Entrer</p></button>}

{showNav && <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>}
      
        {showNav && <section> <Confetti /><nav className="mb-24">
          
         
          <ol className=" m-auto  p-4 flex w-3/4 flex-row   justify-between 2xl:text-2xl lg:text-xl sm:text-lg">
            <Link href="/accueil"  className= " transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300"><p>Accueil</p></Link>
            <Link href="/programme"  className= "transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300" ><p>Programme</p></Link>
            <Link href="/informations" className= "transition ease-in-out 0 hover:-translate-y-1 hover:scale-150 duration-300" ><p>Informations</p></Link>
          </ol>
        </nav>
        </section>


        }
        {showNav && children}


      </body>
    </html>
  );
}
