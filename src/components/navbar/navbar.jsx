import React from 'react'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div class="hidden justify-evenly items-center w-screen h-[50px] bg-gradient-to-r from-violet-500 to-fuchsia-500 sm:flex" >
      <div class="justify-center items-center"> <img src={logo} class="cursor-pointer"/></div>
      <div class=" flex justify-evenly items-center gap-10">
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Company</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Home</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">About</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Pricing</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Team</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Contact</p>
        <p class="text-white cursor-pointer text-xl  font-patua hover:text-black">Blog</p>
      </div>
      <div class=" flex justify-center items-center h-[30px] w-[100px]border-solid border-2 rounded-[12px] border-[#EB5757] text-white cursor-pointer text-xl  font-patua hover:text-black">Trade Now</div>
     </div>
  )
}

export default Navbar;