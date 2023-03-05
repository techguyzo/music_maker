import { TWButton } from "@/components/CustomComponents";
import Image from "next/image";
import loginImg from "../public/loginImg.jpg";

export default function LoginPage() {
  return (
    <div className="dashboard-container">
      <div className="image-container">
        <Image
          src={loginImg}
          alt="LoginImage"
          className=" rounded-xl  transition-transform hover:rotate-3 hover:scale-125"
        />
      </div>
      <div className="animation-from-bottom">
        <p className="click-menu   text-7xl ">Lets Started</p>
        <TWButton
          text="Login"
          textColor="text"
          className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] "
        />
        <TWButton
          text="Create Project"
          textColor="text"
          className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] mt-4"
        />
        <TWButton
          text="Support"
          textColor="text"
          className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] mt-4"
        />
      </div>
    </div>
  );
}
