'use client'

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { useState, useCallback, useEffect } from "react";

import Image from "next/image";
import infos from "../images/infos.png";
const containerStyle = {
    width: "1000px",
    height: "300px",
};

const center = {
    lat: 43.6016188882172465,
    lng: 1.3894137819742425,
};

export default function Informations() {


    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDzHcwbBQI8cAb65pFUxd-VxDeMhAMp9ow",
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        setTimeout(() => {
            setZoom(19);
        }, 300);
    }, []);



    return (
        <div className="flex flex-col justify-center align-middle items-center  text-center ">

            <p className="w-100 h-100 sm:w-1/2 sm:h-1/2"><Image
                src={infos}
                layout="responsive"
                width={450}
                height={450}
                alt="Infos"
            ></Image>
            </p>


            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "90vw", height: "25vh" }}
                    center={center}
                    zoom={zoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {<Marker position={center} />}
                    <></>
                </GoogleMap>
            )}

        </div>
    )
}