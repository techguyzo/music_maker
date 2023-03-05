import Link from "next/link";
import React from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { MdOutlineMusicOff } from "react-icons/md";

interface PathLink {
  href: string;
  title: string;
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const pathLinks: PathLink[] = [
    {
      href: "/create_project",
      title: "Create Your Music",
    },
    {
      href: "/login_page",
      title: "Login",
    },
  ];

  const toggleMenu = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="fixed flex flex-row justify-between  bg-pink-300 p-3  w-full">
      <div className="phone:flex-col phone:items-center tablet:justify-between tablet:flex  w-full p-2">
        <div className=" text-4xl flex flex-shrink-0 phone:justify-center mx-auto">
          Music Maker
        </div>

        {/* <div
          className={`${
            open ? "block" : "hidden"
          } phone:mt-2 tablet:flex  tablet:ml-auto w-full items-center justify-end`}
        >
          {pathLinks.map((pathLink, index) => (
            <Link key={index} href={pathLink.href}>
              <h1 className="hover:scale-125 duration-300 py-1 p-2 rounded-lg bg-pink-500 mx-2 phone:mb-2">
                {pathLink.title}
              </h1>
            </Link>
          ))}
        </div> */}
      </div>
      {/* <button className="flex tablet:hidden" onClick={toggleMenu}>
        {open ? <MdOutlineMusicOff size={24} /> : <BsMusicNoteList size={24} />}
      </button> */}
    </div>
    // <div className="flex flex-row justify-between p-3">
    //   <header>fKK</header>
    //   <button>HH</button>
    // </div>
  );
}
