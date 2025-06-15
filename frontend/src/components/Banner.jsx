import React from "react";
import banner from"../../public/Banner.jpg"

 function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
        <div className="w-full roder-2 md:roder-1   md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
        <h className="text-4xl font-bold">Hello, welcomes here to learn something <span className="text-pink-500">new everyday!!!</span></h>
        <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quia corrupti nobis earum, ex ea magni ad? Asperiores odio deleniti impedit. Voluptatum porro omnis, excepturi consequuntur
        </p>
        
        
        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Email" required />
</label>
</div>
<button className="btn mt-6 btn-secondary">Get started</button>



 </div>

        <div className="roder-1 w-full md:w-1/2">
        <img src={banner}  className="w-92 h-92" alt=""/>
        </div>
</div>
</>
  );
}
export default Banner;