'use client'

import '../globals.css'
//import Confetti from 'react-confetti-boom';

import Confetti from 'react-confetti'
import Image from 'next/image'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api'

import { useState,useCallback,useEffect } from 'react'

import pola from '../images/pola.png'
import cochon from '../images/pola_cochon.png'
import texte from '../images/texte.png'

const containerStyle = {
  width: '1000px',
  height: '300px',
}

const center = {
  
  lat: 43.6016188882172465,
  lng: 1.3894137819742425,
}


export default function Home() {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDzHcwbBQI8cAb65pFUxd-VxDeMhAMp9ow',
  })
  
  const [map, setMap] = useState(null)
  
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    
    setMap(map)
   

  }, [])
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  

  const [zoom, setZoom] = useState(14)


  useEffect(() => {
    setTimeout(() => {
        setZoom(19)
    }, 300);
  }, [])

  return (
    <>

      <audio autoPlay loop>
        <source src="music.mp3" type="audio/mpeg" />
        
      </audio>
      <h1 className='m-4 2xl:text-6xl lg:text-4xl sm:text-2xl text-center'>Anniversaire Adeline et Vincent</h1>

      <Confetti />

      <div className="flex items-center flex-wrap gap-4 justify-center ">
        <p className="w-1/4 h-1/4" ><Image src={pola}
        layout="responsive"
          width={450}
          height={450}
          
          alt="Polaroid"></Image></p>

<p className="w-1/4 h-1/4" ><Image src={texte}
layout="responsive"
          width={450}
          height={450}
          
          alt="Polaroid"></Image></p>

<p className="w-1/4 h-1/4" ><Image src={cochon}
        layout="responsive"
          width={450}
          height={450}
          
          alt="Polaroid"></Image></p>

{isLoaded && <GoogleMap
      mapContainerStyle={{width:'50vw',height:'25vh'}}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {<Marker
      
      position={center}
    />}
      <></>
    </GoogleMap>}
      </div>





     
    </>
  );
}
