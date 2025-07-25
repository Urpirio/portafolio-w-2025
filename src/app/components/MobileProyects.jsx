"use client";
import Image from "next/image";
import { DataMobileProyects } from "./Subcomponents/Data/DataMobileProyects";
import { Carousel } from "primereact/carousel";

export default function MobileProyects() {
  return (
    <section className="flex flex-col items-center p-10">
      <div className="flex flex-col items-center gap-3 ">
        <h2 className=" text-4xl">Mobile Proyects</h2>
        <div className="h-1.5  bg-green-400 w-7 rounded-2xl"></div>
      </div>
      <div className="flex items-center  sm:p-5 sm:justify-center gap-10 p-5  w-full overflow-scroll" id="TopProyect">
        {DataMobileProyects.map((D) => {
          return (
            <article className="w-60 min-w-60  border rounded-2xl border-green-400 p-2 bg-gray-50 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ">
              <Image className="rounded-2xl" src={D?.Image} />
              <h2 className="text-center text-green-600 font-semibold py-2">{D.Title}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
