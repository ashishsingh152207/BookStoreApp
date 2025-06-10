import React from 'react'
import Cards from"./Cards";


import list from"../../public/list.json"
import {Link} from "react-router-dom"


function Course() {
  return (
   <>
   <div className="max-wscreen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justif-center text-center">
        <h1 className="text -2xl  md:text-4xl">We're delighted to have you<span className="text-pink-500"> Here! :)</span></h1>
        <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto consequatur id possimus omnis facere corrupti nemo eos culpa, repudiandae ratione fugit esse ducimus atque tempora alias doloribus totam sint corporis quaerat non rerum odio. Quam neque aliquam nisi adipisci id omnis facilis tempore ab aut soluta doloribus, eius consequatur ipsa, esse tenetur iure iste.
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
        
    </div>
    <div className="mt-12 grid gride-cols-1 md:grid-cols-4 ">
        {
         list.map((item)=>(
            <Cards key={item.id} item={item}/>
                 ))

         }
    </div>
   </div>
   </>
  )
}

export default Course
