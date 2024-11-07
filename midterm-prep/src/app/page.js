"use client"; //if theres an error that says React hook only works with "use client" directive, use this at top

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  // - TODO
  //
  // - Item 1
  // X Button that fetches
  // X Container for button
  // X Container for displaying content (empty, loading, fulfilled state)
  // - Fetch content (handle and format content)
  // X Store content somewhere (in the state)
  // - Loading state
  // - Error handling
  // - Styling
  // - Breakpoints (mobile-first methodology, building a simple screen then adding on)
  // - function to clear data


  async function fetchImages() { //async because we don't know when data will arrive
    const API_URL = "https://picsum.photos/v2/list?limit=5";
    setLoading(true);
    const response = await fetch(API_URL); //wait till the data is here from the promise since we don't know when data will be here, api calls will always show in network tab of the browser's console;
    const data = await response.json(); //json is in promise, running response through json and storing it there.
    // console.log("button clicked");
    // alert("button clicked");
    // const debuggerVar = "test var"; //before the debugger to see if error is here
    // debugger; //can pause at this moment of time if an error occurs, don't leave it in the code, can console.log instead
    // const moreDebuggerVar = "another test var"; //after the debugger to see if error is here
    // setImageData({ image:"image data will go here" })
    setImageData(data)
    setLoading(false);
  }

  const Header = () => {
    return (
      <section>
        <h1>Midterm App</h1>
        <button className="border-2 border-black p-2" onClick={fetchImages}>Fetch📸</button>
      </section>
    );
  };

  const ImageListContainer = () => {
    if(loading) {
      return <section>Loading...🫡</section>
    }
    if(imageData) {
      const imageListItems = [];

      imageData.forEach((image, i) => {
        // debugger;
        imageListItems.push(
          
          // {"id": "1",
          // "author": "Alejandro Escamilla",
          // "width": 5000,
          // "height": 3333,
          // "url": "https://unsplash.com/photos/LNRyGwIJr5c",
          // "download_url": "https://picsum.photos/id/1/5000/3333"}, each item in api

          <article className="mb-2" key={image.id}>
          <img src={image.download_url} />
          <p>Author: {image.author}</p>
          <a href = {image.url}>View this image on Unsplash! This API has bad docs.</a>
          <hr />
        </article>)
      });

      return <section>{imageListItems}</section>
    }
    return <section>No images fetched😞</section>
  }

  return (
    <div className="m-2">
      <Header />
      <ImageListContainer />
      </div>
  );
}
