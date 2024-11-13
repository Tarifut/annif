'use client'
import { useState } from "react";
import Home from "./welcome/page";

export default function Homepage(){


   


const [clicked,setClicked]=useState(false)

function handleClick(){
    setClicked(true);
   
}


    return (
        <>
        
        {!clicked && <button onClick={handleClick} className="m-4 text-9xl text-center w-screen h-screen flex items-center justify-center">Entrer</button>}
        {clicked && <Home></Home>}
        </>
    )
}