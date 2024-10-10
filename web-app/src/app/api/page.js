"use client"
import { useState } from "react";

export default function Page() {
    // xbutton to click to call api
    // function that calls the api
    // xsomewhere to output the data I get back
    // iterator to work through the data and format it
    // display an empty and fulfilled state
    // xcreate a state to contain my data

    // const [products, setProducts] = useState(null);
    //const API_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    
    const [media, setMedia] = useState(null);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2";

    //async function fetchProducts() {
    async function fetchMedia() {
        const response = await fetch(API_URL)
        console.log(response);
        const data = await response.json();
        console.log(data);
        // setProducts(data);
        setMedia(data);
    }
    
    // const ProductOutput = () => {
    //     if (products) {

    //         let productsList = [];

    //         products.forEach((product, index) => {
    //             productsList.push(
    //                 <li key={index}>
    //                     {product.name}
    //                 </li>
    //             );
    //         }); 

    //         return (
    //             <div className="p-4 mb-4 border-4 border-black text-center">
    //                 <ul>{productsList}</ul>
    //             </div>
    //         )
    //     }
    const MediaOutput = () => {
        if (media) {
            let MediaList = [];

            media.forEach((mediaItem, index) => {
                MediaList.push(
                    <li key={index}>
                        <h2 className="text-xl">{mediaItem.title}</h2>
                        <img src={mediaItem.url} alt={mediaItem.explanation}/>
                        <p>{mediaItem.explanation}</p>
                    </li>
                );
            }); 

            return (
                <div className="p-4 mb-4 border-4 border-black text-center">
                    <ul>{MediaList}</ul>
                </div>
            )
        }

        return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                🌭🌭🌭🌭🌭🌭NO🌭🌭🌭PRODUCTS🌭🌭🌭🌭YET🌭🌭🌭🌭🌭🌭
            </div>
            )
    }

  return (
    <div className="p-4 bg-yellow-300">
        Welcome to my API page!
        <header className="p-4 mb-4 border-4 border-black text-center">
            {/* <h1 className="text-4xl mb-4">Welcome to my product page!</h1> */}
            <h1 className="text-4xl mb-4">Welcome to my media page!</h1>
            <button
                className="text-yellow-300 bg-black p-4"
                // onClick={fetchProducts}
                onClick={fetchMedia}
            >
                {/* 🌭Fetch Products! */}
                🚀Fetch Media!
            </button>
        </header>
        {/* <ProductOutput /> */}
        <MediaOutput/>
    </div>
  );
}
