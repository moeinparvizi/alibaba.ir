// import React from 'react'
// banners
import bannerAirplanin from "../assets/images/hero-e1fa22fb.webp";

// svgs
import ParvazeDakheliIcon from "./icons/parvazedakheli";
import ParvazeKharejiIcon from "./icons/parvazekhareji";
import GhatarIcon from "./icons/ghatar";
import BusIcon from "./icons/bus";
import ToorIcon from "./icons/toor";
import HotelIcon from "./icons/hotel";
import VillaIcon from "./icons/villa";

import { useEffect } from "react";

function Tabs() {
  // choices a tab and change color and more
  function resetTab(tab) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((item) => {
      if (!item.classList.contains("hidden")) {
        item.children[1].classList.add("hidden");
      }
      if (item.children[0].classList.contains("text-blue")) {
        item.children[0].classList.remove("text-blue");
      }
    });
    tab.children[1].classList.remove("hidden");
    tab.children[0].classList.add("text-blue");
    tab.children[0].classList.remove("text-text");
  }
  useEffect(() => {
    document.querySelectorAll(".tab").forEach((val) => {
      val.children[0].classList.add("text-text");
    });
  });
  useEffect(() => {
    resetTab(document.querySelectorAll(".tab")[0]);
  }, []);

  return (
    <ul className="flex justify-evenly items-center relative [&>li]:text-center">
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[0];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <ParvazeDakheliIcon />
          <figcaption>پرواز داخلی</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(-25%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[1];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <ParvazeKharejiIcon />
          <figcaption>پرواز خارجی</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(-25%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[2];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <GhatarIcon />
          <figcaption>قطار</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(15%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[3];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <BusIcon />
          <figcaption>اتوبوس</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(2%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[4];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <ToorIcon />
          <figcaption>تور</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(15%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[5];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <HotelIcon />
          <figcaption>هتل</figcaption>
        </figure>
        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(15%)",
          }}
        ></li>
      </li>
      <li
        className="relative tab"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[6];
          resetTab(tab);
        }}
      >
        <figure className="text-blue my-2 font-bold">
          <VillaIcon />
          <figcaption>ویلا و اقامتگاه</figcaption>
        </figure>

        <li
          className="tab-links-active"
          role="none"
          style={{
            visibility: "visible",
            transition: "all 1s",
            transform: "translate(-40%)",
          }}
        ></li>
      </li>
    </ul>
  );
}

function Content() {
  return (
    <section className="flex justify-center px-20">
      <div className="container">
        <figure className="w-full flex justify-center flex-col">
          <img src={bannerAirplanin} alt="banner" />
          <figcaption className="border-2 w-10/12 rounded-md border-line translate-x-[-10%] translate-y-[-62%] bg-white">
            <Tabs />
            <hr className="border border-line" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo,
            rerum eaque eos corrupti repellat blanditiis sunt facilis deleniti
            ullam, alias tenetur iusto, doloribus ipsam nulla aspernatur
            quibusdam culpa commodi!
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Content;
