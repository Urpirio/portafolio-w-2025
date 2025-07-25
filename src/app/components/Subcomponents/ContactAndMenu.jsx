"use client";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import LinkContact from "@/app/func/LinkContact";
import { useEffect, useState } from "react";

export default function ContactAndMenu({setDeployMenu,DeployMenu}) {
  //componente del menu

  const [Prueba, setPrueba] = useState(<TfiMenu />);
  const pathBoleano = usePathname();

  return (
    <div className="flex flex-grow basis-0 justify-end">
      <button
        onClick={() => {
          LinkContact(pathBoleano);
        }}
        className=" hidden sm:flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-500 text-white font-bold cursor-pointer hover:opacity-75 "
      >
        Contact
      </button>
      <button
        onClick={()=>setDeployMenu(!DeployMenu)}
        name="Navegation Menu"
        className="text-4xl sm:hidden flex"
        id="MenuNav"
      >
        {DeployMenu ? <IoMdClose /> : <TfiMenu />}
      </button>
    </div>
  );
}
