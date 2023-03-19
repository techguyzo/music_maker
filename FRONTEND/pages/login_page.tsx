import Image from "next/image";
import Link from "next/link";
import loginImg from "../public/loginImg.jpg";
import { TWButton } from "@/components/CustomComponents";

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
        <Link href="/register_page" className="flex w-full justify-center">
          <TWButton
            text="Login"
            textColor="text"
            className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] "
          />
        </Link>
        <Link href="/create_page" className="flex w-full justify-center">
          <TWButton
            text="Create Project"
            textColor="text"
            className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] mt-4"
          />
        </Link>
        <Link href="/support_page" className="flex w-full justify-center">
          <TWButton
            text="Support"
            textColor="text"
            className=" animation-to-right animation-bounce hover:text-pink-500 w-[30%] mt-4"
          />
        </Link>
      </div>
    </div>
  );
}
