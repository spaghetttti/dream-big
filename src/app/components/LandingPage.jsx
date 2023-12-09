import * as React from "react";
import { Hero } from "./Hero";
import { ServicesOffersList } from "./ServicesOffersList";
import { JobOffersList } from "./JobOffersList";
import { Testimonials } from "./Testimonials";
import { EndingBanner } from "./EndingBanner";
import { AboutUs } from "./AboutUs";


export function LandingPage(props) {
  return (
    <>
      <Hero />
      <ServicesOffersList />
      <JobOffersList />
      <Testimonials />
      <EndingBanner />
      <AboutUs />
    </>
  );
}
