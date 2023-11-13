import bag1 from "../assets/images/footerTop/download.webp";
import bag2 from "../assets/images/footerTop/download (1).webp";
import bag3 from "../assets/images/footerTop/download (2).webp";

import Logo from "../assets/images/download.svg";

import b1 from "../assets/images/footerbottom/aira-682b7c43.png";
import b2 from "../assets/images/footerbottom/ecunion-8b792f56.png";
import b3 from "../assets/images/footerbottom/passenger-rights-48368f81.svg";
import b4 from "../assets/images/footerbottom/samandehi-6e2b448a.png";
import b5 from "../assets/images/footerbottom/state-airline-f45c55b2.svg";
import { Github, Instagram } from "react-bootstrap-icons";
import { LinkedIn } from "@mui/icons-material";

function TopFooter() {
  return (
    <div className="flex p-5 justify-around gap-3 flex-wrap">
      <figure className="flex justify-center items-center gap-3 w-[350px]">
        <img src={bag1} className="w-[100px]" alt="badg1" />
        <figcaption className="flex flex-col">
          {" "}
          <h6 className="text-textHeder font-bold text-[20px]">
            رتبه یک سفر
          </h6>{" "}
          <p className="text-text">
            {" "}
            ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور){" "}
          </p>{" "}
        </figcaption>
      </figure>
      <figure className="flex justify-center items-center gap-3 w-[350px]">
        <img src={bag2} className="w-[100px]" alt="badg1" />
        <figcaption className="flex flex-col">
          <h6 className="text-textHeder font-bold text-[20px]">همسفر هر سفر</h6>
          <p className="text-text">
            معتبرترین عرضه‌کننده محصولات گردشگری در ایران
          </p>
        </figcaption>
      </figure>
      <figure className="flex justify-center items-center gap-3 w-[350px]">
        <img src={bag3} className="w-[100px]" alt="badg1" />
        <figcaption className="flex flex-col">
          <h6 className="text-textHeder font-bold text-[20px]">
            همسفر همه لحظات سفر
          </h6>
          <p className="text-text">
            پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

function MainFooter() {
  return (
    <div className="border-t border-line flex p-5">
      <div className="flex flex-col w-[45%] py-5">
        <div className="[&>ul]:list-none flex flex-wrap justify-between">
          <ul className="flex flex-col justify-start text-text">
            <li className="text-textHeder mb-3 font-bold">علی‌بابا</li>

            <li className="mb-1">
              <a href="#">درباره ما</a>
            </li>
            <li className="mb-1">
              <a href="#">تماس با ما</a>
            </li>
            <li className="mb-1">
              <a href="#">چرا علی&zwnj;بابا</a>
            </li>
            <li className="mb-1">
              <a href="#">علی بابا پلاس</a>
            </li>
            <li className="mb-1">
              <a href="#">بیمه مسافرتی</a>
            </li>
            <li className="mb-1">
              <a className="footer-link" href="#">
                مجله علی&zwnj;بابا
              </a>
            </li>
          </ul>
          <ul className="flex flex-col justify-start text-text">
            <li className="text-textHeder mb-3 font-bold">خدمات مشتریان</li>

            <li className="mb-1">
              <a href="#">درباره ما</a>
            </li>
            <li className="mb-1">
              <a href="#">تماس با ما</a>
            </li>
            <li className="mb-1">
              <a href="#">چرا علی&zwnj;بابا</a>
            </li>
            <li className="mb-1">
              <a href="#">علی بابا پلاس</a>
            </li>
            <li className="mb-1">
              <a href="#">بیمه مسافرتی</a>
            </li>
          </ul>
          <ul className="flex flex-col justify-start text-text">
            <li className="text-textHeder mb-3 font-bold">اطلاعات تکمیلی</li>

            <li className="mb-1">
              <a href="#">چرا علی&zwnj;بابا</a>
            </li>
            <li className="mb-1">
              <a href="#">علی بابا پلاس</a>
            </li>
            <li className="mb-1">
              <a href="#">بیمه مسافرتی</a>
            </li>
            <li className="mb-1">
              <a className="footer-link" href="#">
                مجله علی&zwnj;بابا
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-end w-[45%] py-5 gap-5">
        <img src={Logo} className="w-[200px]" />
        <p className="text-text text-[15px]">تلفن پشتیبانی: 09226756339</p>
        <p className="text-text text-[15px]">
          دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم،
          بن‌بست گل‌ها، پلاک 1
        </p>

        <div className="flex gap-3">
          <figure className="border border-line p-2 rounded-lg w-[100px] h-[100px] flex justify-center items-center">
            <img src={b1} alt="" />
          </figure>
          <figure className="border border-line p-2 rounded-lg w-[100px] h-[100px] flex justify-center items-center">
            <img src={b2} alt="" />
          </figure>
          <figure className="border border-line p-2 rounded-lg w-[100px] h-[100px] flex justify-center items-center">
            <img src={b3} alt="" />
          </figure>
          <figure className="border border-line p-2 rounded-lg w-[100px] h-[100px] flex justify-center items-center">
            <img src={b4} alt="" />
          </figure>
          <figure className="border border-line p-2 rounded-lg w-[100px] h-[100px] flex justify-center items-center">
            <img src={b5} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

function Me() {
  return (
    <div className="border-t border-line pb-5">
      <div className="flex justify-center md:justify-between flex-col-reverse md:flex-row mt-3">
        <div className="text-text flex justify-center md:justify-normal font-bold text-[15px] md:text-[17px]">
          بازنویسیه این سایت توسط معین پرویزی انجام شده است
        </div>
        <div className="text-text flex justify-center mb-3 md:mb-0 md:justify-between items-center w-full text-[25px] md:w-1/5">
          <a href="https://instagram.com/moeinparvizi.dev" className="me-5">
            <Instagram />
          </a>
          <a
            href="https://linkedin/in/moeinparvizi2002"
            className="flex justify-center items-center me-5 text-[30px]"
          >
            <LinkedIn sx={{ fontSize: "30px" }} />
          </a>
          <a href="https://github.com/moeinparvizi">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

function LiMob() {
  return (
    <div className="[&>ul]:list-none flex flex-wrap gap-5 justify-center">
      <ul className="flex flex-col justify-start text-text">
        <li className="text-textHeder mb-3 font-bold">علی‌بابا</li>

        <li className="mb-1">
          <a href="#">درباره ما</a>
        </li>
        <li className="mb-1">
          <a href="#">تماس با ما</a>
        </li>
        <li className="mb-1">
          <a href="#">چرا علی&zwnj;بابا</a>
        </li>
        <li className="mb-1">
          <a href="#">علی بابا پلاس</a>
        </li>
        <li className="mb-1">
          <a href="#">بیمه مسافرتی</a>
        </li>
        <li className="mb-1">
          <a className="footer-link" href="#">
            مجله علی&zwnj;بابا
          </a>
        </li>
      </ul>
      <ul className="flex flex-col justify-start text-text">
        <li className="text-textHeder mb-3 font-bold">خدمات مشتریان</li>

        <li className="mb-1">
          <a href="#">درباره ما</a>
        </li>
        <li className="mb-1">
          <a href="#">تماس با ما</a>
        </li>
        <li className="mb-1">
          <a href="#">چرا علی&zwnj;بابا</a>
        </li>
        <li className="mb-1">
          <a href="#">علی بابا پلاس</a>
        </li>
        <li className="mb-1">
          <a href="#">بیمه مسافرتی</a>
        </li>
      </ul>
      <ul className="flex flex-col justify-start text-text">
        <li className="text-textHeder mb-3 font-bold">اطلاعات تکمیلی</li>

        <li className="mb-1">
          <a href="#">چرا علی&zwnj;بابا</a>
        </li>
        <li className="mb-1">
          <a href="#">علی بابا پلاس</a>
        </li>
        <li className="mb-1">
          <a href="#">بیمه مسافرتی</a>
        </li>
        <li className="mb-1">
          <a className="footer-link" href="#">
            مجله علی&zwnj;بابا
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function footer() {
  return (
    <>
      <footer className="border-t border-line hidden md:flex justify-center items-center mt-20">
        <div className="container">
          <TopFooter />

          <MainFooter />

          <Me />
        </div>
      </footer>

      <footer className="border-t border-line flex md:hidden justify-center items-center my-20">
        <div className="container">
          <TopFooter />

          <LiMob />
          <div className="text-text flex justify-around mt-5">
            <div>تلفن پشتیبانی</div>
            <div>09226756339</div>
          </div>
          <div className="flex justify-center">
            <div className="text-text text-[15px] mx-16">
              دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه
              چهارم، بن‌بست گل‌ها، پلاک 1
            </div>
          </div>
          <figure className="flex justify-center mb-5">
            <img className="w-[100px]" src={Logo} alt="" />
          </figure>
          <Me />
        </div>
      </footer>
    </>
  );
}
