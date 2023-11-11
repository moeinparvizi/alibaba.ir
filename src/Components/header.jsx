// import React from 'react'
// banners
import bannerAirplanin from "../assets/images/banner/hero-6061caed.jpg";
import bannerAirplanout from "../assets/images/banner/hero-9cf704bc.jpg";
import bannerTrain from "../assets/images/banner/hero-f5969150.webp";
import bannerBus from "../assets/images/banner/hero-824e4df4.webp";
import bannerToor from "../assets/images/banner/hero-f039b6c5.webp";
import bannerHotel from "../assets/images/banner/hero-ea8b776d.jpg";
import bannerVilla from "../assets/images/banner/hero-2aa84383.jpg";
import logomobile from "../assets/images/logomobile.svg";

// svgs
import ParvazeDakheliIcon from "./icons/parvazedakheli";
import ParvazeKharejiIcon from "./icons/parvazekhareji";
import GhatarIcon from "./icons/ghatar";
import BusIcon from "./icons/bus";
import ToorIcon from "./icons/toor";
import HotelIcon from "./icons/hotel";
import VillaIcon from "./icons/villa";

import SubTab from "./subtab";

import { useEffect, useState } from "react";

function Tabs() {
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

  setInterval(() => {
    if(window.scrollY > 300){
      document.querySelector('.menu-top').classList.add('mobilemenuactive')
      document.querySelector('.mobilemenuparent').classList.add('!h-[100px]')
    }
    if(window.scrollY < 300){
      document.querySelector('.menu-top').classList.remove('mobilemenuactive')
      document.querySelector('.mobilemenuparent').classList.remove('!h-[100px]')
    }
  },400)

  return (
    <ul className="menu-top flex justify-evenly items-center relative [&>li]:text-center">
      <li
        className="relative tab parvaze-dakheli"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[0];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document
            .querySelector(".banner")
            .setAttribute("src", bannerAirplanin);
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
        className="relative tab parvaze-khareji"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[1];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document
            .querySelector(".banner")
            .setAttribute("src", bannerAirplanout);
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
        className="relative tab ghatar"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[2];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document.querySelector(".banner").setAttribute("src", bannerTrain);
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
        className="relative tab bus"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[3];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document.querySelector(".banner").setAttribute("src", bannerBus);
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
        className="relative tab toor"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[4];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document.querySelector(".banner").setAttribute("src", bannerToor);
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
        className="relative tab hotel"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[5];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document.querySelector(".banner").setAttribute("src", bannerHotel);
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
        className="relative tab villa-eghamatgah"
        onClick={() => {
          const tab = document.querySelectorAll(".tab")[6];
          resetTab(tab);
          document.querySelector(".banner").removeAttribute("src");
          document.querySelector(".banner").setAttribute("src", bannerVilla);
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
    <header className="nav-section relative md:flex justify-center md:mt-10 lg:mt-15 px-0 md:px-20">
      <div className="md:container">
        <figure className="w-full mobilemenuparent flex justify-center flex-col h-[200px] bg-yellow md:bg-transparent">
          <img
            className="banner hidden md:flex"
            src={bannerAirplanin}
            alt="banner"
          />
          <img src={logomobile} className="flex md:hidden absolute w-[20%] top-10 left-1/2 -translate-x-1/2" alt="" />
          <figcaption className="mobileulparent absolute left-1/2 -translate-x-1/2 top-[110%] md:top-[130%] border-2 w-10/12 rounded-md border-line translate-y-[-62%] bg-white">
            <Tabs />
            <hr className="border border-line hidden md:flex" />
            <SubTab />
          </figcaption>
        </figure>
      </div>
    </header>
  );
}

export default Content;
