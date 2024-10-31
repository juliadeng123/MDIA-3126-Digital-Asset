"use client"

import { useEffect } from 'react';
import {APIProvider, Map, Marker, useMarkerRef} from '@vis.gl/react-google-maps';
  
  export default function Home() {
 
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [markerRef, marker] = useMarkerRef();

    useEffect(() => {
      if(!marker){
        return;
      }
    }, [marker]);

  return (
    <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 49.249489933370974, lng: -123.00058273024128}}
      defaultZoom={17}
    >
      <Marker ref={markerRef} position={{lat: 49.249489933370974, lng: -123.00058273024128}}/>
    </Map>
    </APIProvider>
  );
}
