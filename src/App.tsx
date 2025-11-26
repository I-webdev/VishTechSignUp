import logo from "./assets/PNG/logo.webp";
import appleLogo from "./assets/SVG/appleSvg.svg";
import googleLogo from "./assets/SVG/googleSvg.svg";
import picture from "./assets/PNG/Product.jpeg";
import openEyes from './assets/SVG/openEyes.svg'
import closedEyes from "./assets/SVG/closedEyes.svg";
import { useState } from "react";
function App() {
  const [openEyeslid, setOpenEyeslid] = useState(false);
  return (
    <div className="bg-gray-300 p-3 sm:px-10 sm:py-5 h-full">
      <div className="bg-white max-sm:px-4 p-8  grid grid-cols-1 gap-20 sm:grid-cols-2 rounded-2xl">
        {/* left side */}
        <div className="flex flex-col w-[90%]">
          <img src={logo} alt="" className="w-10 h-10" />
          <div className="sm:mt-10 mt-7">
            <p className="text-2xl font-semibold">Get Started Now</p>
            <p className="text-sm">
              Enter your credentials to access your account
            </p>
            <div className="flex max-sm:justify-around sm:gap-20 mt-10">
              <button className=" px-2 md:px-3  py-2 md:py-3 rounded-full md:rounded-2xl border border-gray-300 flex items-center md:gap-2">
                <img src={googleLogo} alt="" className="w-6 h-6" />
                <p className="text-sm max-md:hidden"> Log in with Google</p>
              </button>
              <button className="px-2 md:px-3  py-2 md:py-3 rounded-full md:rounded-2xl border border-gray-300 flex items-center gap-2">
                <img src={appleLogo} alt="" className="w-6 h-6" />
                <p className="text-sm max-md:hidden"> Log in with Apple</p>
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center  my-5 ">
            <hr className="w-[40%] text-gray-300" />
            <p>or</p>
            <hr className="w-[40%] text-gray-300" />
          </div>
          <div className="flex flex-col gap-5 text-sm ">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <input
                placeholder="Bello Uzor"
                name="name"
                type="text"
                className="border border-gray-400 rounded-3xl py-1.5 px-4 outline-[#4d69cf]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email address</label>
              <input
                placeholder="belloUzor@gmail.com"
                name="email-address"
                type="email"
                className="border border-gray-400 rounded-3xl py-1.5 px-4 outline-[#4d69cf]"
              />
            </div>
            <div className=" flex flex-col">
              <div className="flex flex-col gap-1 ">
                <div className="flex justify-between">
                  <label htmlFor="">Password</label>
                  <button className="outline-transparent text-sm text-[#4d69cf]">
                    forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    placeholder="belo12dduje"
                    name="password"
                    type={openEyeslid ? "text" : "password"}
                    className="border border-gray-400 w-full rounded-3xl py-1.5 px-4 outline-[#4d69cf]"
                  />
                  <img
                  onClick={()=>{setOpenEyeslid(prev=>!prev)}}
                    src={openEyeslid ? closedEyes : openEyes}
                    alt=""
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* checkbox for privacy */}
          <div className="flex gap-3 text-sm mt-5">
            <input type="checkbox" name="" id="" />
            <p>I agree to the Terms and Privacy </p>
          </div>
          <button className="text-white font-semibold bg-[#1740d6] py-1.5 rounded-2xl mt-3">
            Login
          </button>
          <div className="text-sm flex gap-2 mt-5">
            <p>Have an account?</p>
            <button className="outline-transparent text-[#4d69cf]">
              Sign in
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="bg-[#1740d6] text-white text-2xl rounded-2xl px-5  pb-5 max-sm:hidden">
          <h3 className="sm:mt-12 mt-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            aperiam repre
          </h3>
          <img
            src={picture}
            alt=""
            className="mt-10 rounded-3xl object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
