
import { heroImg } from "../assets";
import { bg } from "../assets";

export default function Hero() {
  return (
    <div
      className="hero bg-cover bg-center w-full h-[70vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container flex justify-between items-center overflow-hidden">
        <div className="left ml-10 mt-10">
          <h1 className="text-[#60b8fc] text-[35px] text-center md:text-[60px]">
            Dont miss our daily <br /> amazing deal
          </h1>
          <p className="text-[10px]text-[#7e7e7e] md:text-[20px] text-[#7f7f7f] text-center">
            Save up to 60% off on your first order
          </p>
          <div className="bg-[#fff] max-w-[500px] mt-10 md:mb-10 rounded-lg py-2">
            <input type="text" className="w-[80%] md:w-[83%] border-0 outline-0 rounded-lg" />
            <button className="bg-[#60b8fc] rounded-lg font-[16px] py-2 px-3">Search</button>
          </div>
        </div>
        <div className="">
          <img src={heroImg} className="hidden md:flex wh-[37rem]" />
        </div>
      </div>
    </div>
  );
}
