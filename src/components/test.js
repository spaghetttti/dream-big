import * as React from "react";
import Image from "next/image";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ServicesOffersList } from "./ServicesOffersList";
import { JobOffersList } from "./JobOffersList";
import { Testimonials } from "./Testimonials";
import { EndingBanner } from "./EndingBanner";
import { Footer } from "./Footer";


export function MyComponent(props) {
  return (
    <div className="bg-orange-100 flex flex-col">
      <Header />
      <div className="bg-red-800 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
      <Hero />
      <ServicesOffersList />
      <JobOffersList />
      <Testimonials />
      <EndingBanner/>
      
      <div className="bg-red-800 self-stretch min-h-[1px] w-full mt-48 max-md:max-w-full max-md:mt-10" />
     <Footer />
    </div>
  );
}
