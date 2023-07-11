import React from 'react'
import ittustrate from "../../assets/illustration.png"
import market from "../../assets/market values.png"
import icon from "../../assets/icon.png"
import icon1 from "../../assets/icon (1).png"
import icon2 from "../../assets/icon (2).png"
import phone from "../../assets/phone-1.png"
import PHONE2 from "../../assets/phone-2.png"
import stock from "../../assets/stock.png"
import trade from "../../assets/trade.png"
import bitcoin from "../../assets/bitcoin.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedn.png"
import insta from "../../assets/insta.png"



const Home = () => {
  return (
    <div class="flex-col items-center justify-center sm:w-screen sm:h-fit bg-[#FFF6FB]">
    <div class="flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 h-fit mt-100px">
        <div class="flex-col justify-center items-center sm:mt-[290px] sm:mb-[200px]">
           <div class="flex sm:w-[665px]">
             <h1 class="text-white cursor-pointer sm:text-6xl  sm:font-serif sm:mt-[-50px]" >Make better businees with Cryptocurrency</h1> 
           </div> <br />
           <div class="flex sm:w-[590px]"> 
            <p class="text-white cursor-pointer sm:text-xl  font-serif">We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology.</p> 
            </div> <br />
            <div class=" flex justify-center items-center text-white bg-[#EB5757] sm:h-[47px] sm:w-[190px] sm:rounded-[50px] cursor-pointer hover:bg-[#ec7e7e] ">Get Whitelisted</div>
        </div>
        <div class="hidden sm:flex"> <img src={ittustrate}  /></div>
    </div>
    <div class="flex-col justify-center items-center bg-[#220076] sm:w-screen sm:h-fit">
        <div class="flex justify-center items-center">
            <h1 class="sm:text-4xl font-serif text-white sm:mt-[30px]">Today's Cryptocurrency Prices</h1>
        </div>
        <div class="flex justify-center items-center sm:mt-[50px] ">
            <img src={market} class="sm:mb-[150px]"/>
        </div>
    </div>
    <div class="flex-col justify-center items-center h-fit bg-[#FFF6FB]">
        <div class="flex justify-center items-center">
            <h1 class="sm:text-4xl font-serif text-black sm:mt-[40px]"> The most trusted cryptocurrency platform</h1>
        </div>
        <div class="flex  justify-evenly items-center mt-[50px] ">
            <div class="flex-col justify-center items-center mb-[50px]">
                <img src={icon}/> <br />
                <h1 class=" text-2xl font-bold font-serif  ">Ease of Trading</h1> <br />
                <p>Intuitive interface</p> <br />
                <p>Instant deposit options</p><br />
                <p>Cash out directly to your bank account</p>
            </div>
            <div class="flex-col justify-center items-center mb-[50px]">
                <img src={icon1}/> <br />
                <h1 class=" text-2xl font-bold font-serif ">Institutional-grade Security</h1> <br />
                <p>98% of assets stored safely offline</p> <br />
                <p>Highly encrypted personal data</p><br />
                <p>Whitelisting and transaction confirmations</p>
            </div>
             <div class="flex-col justify-center items-center mb-[50px]">
                <img src={icon2}/> <br />
                <h1 class=" text-2xl font-bold font-serif ">Proven Reliability</h1> <br />
                <p>Exchanging bitcoin since 2011</p> <br />
                <p>Industry-leading uptime</p><br />
                <p>24/7 dedicated support</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center h-[800px] bg-[#220076]">
        <div class="flex-col justify-center items-center">
            <h1 class="text-white cursor-pointer text-6xl  font-serif mt-[-50px]" >Try the future, today. <br /> Download Crypto</h1> <br />
            <div class="flex w-[700px]">
            <p class="text-white cursor-pointer text-xl  font-serif">Stay connected to the market with our mobile app. Featuring advanced order types and analytical tools for experienced traders, as well as a simple buy & sell interface for those just getting started.</p>
            </div> <br />
            <div class="flex items-center gap-[30px]">
                <div class="flex justify-center items-center h-[55px] w-[160px] bg-[#D7C2FF] cursor-pointer hover:bg-[#a77ef1] rounded-[12px] font-serif text-xl font-bold">App Store</div>
                <div  class="flex justify-center items-center h-[55px] w-[160px] bg-[#D7C2FF] cursor-pointer hover:bg-[#a77ef1] rounded-[12px] font-serif text-xl font-bold">Google Play</div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <img src={phone} alt="" />
            <img src={PHONE2} alt="" />
        </div>
    </div>
    <div class="flex-col justify-center items-center h-fit">
    <div class="flex justify-center items-center">
            <h1 class="text-4xl font-serif text-black mt-[40px]">Learn to thrive</h1>
        </div>
        <div class="flex gap-20 justify-evenly items-center mt-[40px] mb-[70px]">
            <div class="flex-col  shadow-2xl justify-center items-center h-[450px] w-[370px] bg-white">
                <img src={stock} class="w-[370px] h-[210px]" /> <br />
                    <h1 class=" font-bold font-serif ml-[20px] ">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h1> <br />
                    <p class="text=[#4F4F4F]  ml-[20px]">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p> <br />
                    <div class="flex justify-evenly">
                        <p class="text=[#4F4F4F] ">By: Jennia Peris</p>
                        <p class="text=[#4F4F4F] ">15/07/2021</p>
                        <p class="text=[#4F4F4F] ">5 Min to read</p>
                    </div>
            </div>
            <div class="flex-col  shadow-2xl justify-center items-center h-[450px] w-[370px] bg-white">
                <img src={trade} class="w-[370px] h-[210px]" /> <br />
                    <h1 class=" font-bold font-serif ml-[20px] ">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h1> <br />
                    <p class="text=[#4F4F4F]  ml-[20px]">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p> <br />
                    <div class="flex justify-evenly">
                        <p class="text=[#4F4F4F] ">By: Jennia Peris</p>
                        <p class="text=[#4F4F4F] ">15/07/2021</p>
                        <p class="text=[#4F4F4F] ">5 Min to read</p>
                    </div>
            </div>
            <div class="flex-col  shadow-2xl justify-center items-center h-[450px] w-[370px] bg-white">
                <img src={bitcoin} class="w-[370px] h-[210px]" /> <br />
                    <h1 class=" font-bold font-serif ml-[20px] ">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h1> <br />
                    <p class="text=[#4F4F4F]  ml-[20px]">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p> <br />
                    <div class="flex justify-evenly">
                        <p class="text=[#4F4F4F] ">By: Jennia Peris</p>
                        <p class="text=[#4F4F4F] ">15/07/2021</p>
                        <p class="text=[#4F4F4F] ">5 Min to read</p>
                    </div>
            </div>
        </div>
    </div>
    <div class="flex-col justify-center items-center h-fit  bg-[#220076]"> <br /> <br />
            <div class="flex justify-center items-center mt-[60px]">
                <h1 class="font-sans  font-bold text-6xl text-white">Never miss a drop</h1>
            </div> <br />
            <div class="flex justify-center items-center">
                <p class="font-sans text-4xl text-white">Subscribe for the latest news, drops & collectibles</p>
            </div>
            <div class="flex justify-center items-center mt-[50px] ">
                <input type="email" placeholder='Enter your email address ' class="w-[570px] h-[74px] rounded-[50px] text-center"/>
                <input type="submit" class="ml-[-140px] text-2xl bg-[#EB5757] rounded-[50px] w-[140px] h-[70px] text-white cursor-pointer hover:bg-[#f12525]"/>
            </div> <br /> <br /> <br /> <br />
        </div>
        <div class=" flex justify-evenly items-center h-[500px] w-full bg-[#4E0062]">
            <div class="flex-col justify-center items-center">
                <h1 class="font-bold text-3xl text-white">Company</h1> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">About us</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Terms of use </p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Privacy Policy</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black" >Disclaimer</p>
            </div>
            <div class="flex-col justify-center items-center">
                <h1 class="font-bold text-3xl text-white">Businesses</h1> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Prime</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Custody </p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Asset Hub</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black" >Commerce</p>
            </div>
            <div class="flex-col justify-center items-center">
                <h1 class="font-bold text-3xl text-white">Exchange</h1> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Exchange Home</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Margin Trading </p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Derivatives Trading</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black" >Trading Arena</p>
            </div>
            <div class="flex-col justify-center items-center">
                <h1 class="font-bold text-3xl text-white">Blockchain</h1> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Chain Explorer</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">The Syndicate </p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Security</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black" >Cryptous Credit</p>
            </div>
            <div class="flex-col justify-center items-center">
                <h1 class="font-bold text-3xl text-white">Resources</h1> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Prices</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Site Widgets </p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black">Tax</p> <br />
                <p class="text-[#E6E6E6] text-xl cursor-pointer hover:text-black" >Blog</p>
            </div> 
        </div>
        <div class=" flex-col justify-center items-center h-[100px] w-full bg-[#4E0062]">
            <div class="flex w-[1100px] h-[0px] border-1 border-solid border-[#BCBCBC]"></div>
            <div class="flex justify-around items-center">
            <p class="text-[#E6E6E6] text-xl">Copyright 2021, Cryptous</p>
            <div class="flex justify-evenly items-center">
                <div class="w-[35px] h-[35px] flex justify-center cursor-pointer items-center border-[#616161] border-solid border-2 rounded-[10px] hover:bg-[#EB5757]"> <img src={facebook}/></div>
                <div class="w-[35px] h-[35px] flex justify-center cursor-pointer items-center border-[#616161] border-solid border-2 rounded-[10px] hover:bg-[#EB5757]"> <img src={twitter}/></div>
                <div class="w-[35px] h-[35px] flex justify-center cursor-pointer items-center border-[#616161] border-solid border-2 rounded-[10px] hover:bg-[#EB5757]"> <img src={linkedin}/></div>
                <div class="w-[35px] h-[35px] flex justify-center cursor-pointer items-center border-[#616161] border-solid border-2 rounded-[10px] hover:bg-[#EB5757]"> <img src={insta}/></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home;