import { ChevronDown, Person, QuestionCircle } from "react-bootstrap-icons";
import topLogo from "../assets/images/download.svg";
import { useState } from "react";

function TopNavMenu() {
  const [flag, setFlag] = useState(0);
  const [flag2, setFlag2] = useState(0);
  const [flag3, setFlag3] = useState(0);

  function resetli() {
    document.querySelectorAll(".subtopnav").forEach((val) => {
        val.classList.remove("top-[60px]");
        val.classList.remove("opacity-100");
        console.log("raftam");
    });
  }

  return (
    <ul className="[&>li]:px-5 top-nav-ul hidden lg:flex">
      <li
        onClick={() => {
          if (flag == 0) {
            resetli();
            document.querySelector(".bilitul").classList.add("top-[60px]");
            setTimeout(() => {
              document.querySelector(".bilitul").classList.add("opacity-100");
            }, 100);
            setFlag(1)
          } else {
            document.querySelector(".bilitul").classList.remove("top-[60px]");
            setTimeout(() => {
              document
                .querySelector(".bilitul")
                .classList.remove("opacity-100");
            }, 100);
            setFlag(0)
          }
        }}
        className="flex items-center justify-center border-l border-light"
      >
        بلیط
        <ChevronDown className="ms-2" />
        <ul className="bilitul subtopnav border-1 absolute top-[-200px] opacity-0 transition-[.2s] rounded-lg border border-light p-5 bg-white">
          <li className="pb-3 pe-10 border-b border-light">پرواز داخلی</li>
          <li className="pt-2 pb-3 border-b border-light">پرواز خارجی</li>
          <li className="pt-2 pb-3 border-b border-light">قطار</li>
          <li className="pt-2">اتوبوس</li>
        </ul>
      </li>

      <li
        onClick={() => {
          if (flag2 == 0) {
            resetli();
            document.querySelector(".eghamatul").classList.add("top-[60px]");
            setTimeout(() => {
              document.querySelector(".eghamatul").classList.add("opacity-100");
            }, 100);
            setFlag2(1)
          } else {
            document.querySelector(".eghamatul").classList.remove("top-[60px]");
            setTimeout(() => {
              document
                .querySelector(".eghamatul")
                .classList.remove("opacity-100");
            }, 100);
            setFlag2(0)
          }
        }}
        className="flex items-center justify-center border-l border-light"
      >
        اقامت
        <ChevronDown className="ms-2" />
        <ul className="eghamatul subtopnav border-1 absolute top-[-200px] opacity-0 transition-[.2s] rounded-lg border border-light p-5 bg-white">
          <li className="pb-3 pe-10 border-b border-light">هتل</li>
          <li className="pt-2">ویلا و اقامتگاه</li>
        </ul>
      </li>

      <li className="flex items-center justify-center border-l border-light">
        تور
      </li>

      <li
        onClick={() => {
          if (flag3 == 0) {
            resetli();
            document.querySelector(".bishtarul").classList.add("top-[60px]");
            setTimeout(() => {
              document.querySelector(".bishtarul").classList.add("opacity-100");
            }, 100);
            setFlag3(1)
          } else {
            document.querySelector(".bishtarul").classList.remove("top-[60px]");
            setTimeout(() => {
              document
                .querySelector(".bishtarul")
                .classList.remove("opacity-100");
            }, 100);
            setFlag3(0)
          }
        }}
        className="flex items-center justify-center"
      >
        بیشتر
        <ChevronDown className="ms-2" />
        <ul className="bishtarul subtopnav border-1 absolute top-[-200px] opacity-0 transition-[.2s] rounded-lg border border-light p-5 bg-white">
          <li className="pb-3 pe-10 border-b border-light">علی بابا پلاس</li>
          <li className="pb-3 pe-10 border-b border-light">مجله علی بابا</li>
          <li className="pt-2">بیمه مسافرتی</li>
        </ul>
      </li>
    </ul>
  );
}

export default function TopNav() {
  return (
    <nav className="hidden shadow-md md:flex p-3 justify-center">
      <div className="top-nav flex justify-between px-20 container items-center">
        <div className="flex justify-center items-center">
          <figure className="pe-20">
            <img src={topLogo} alt="alibaba logo" />
          </figure>
          <TopNavMenu />
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center [&>li>svg]:!w-[20px] [&>li>svg]:!h-[20px] [&>li>svg]:me-2">
            <li className="flex justify-center items-center">
              <QuestionCircle />
              مرکز پشتیبانی آنلاین
            </li>
            <li className="mx-8 flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                width="1.5em"
                fill="currentColor"
                data-v-640ab9c6=""
              >
                <path
                  d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              سفر های من
            </li>
            <li className="flex justify-center items-center">
              <Person />
              ورود یا ثبت نام
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
