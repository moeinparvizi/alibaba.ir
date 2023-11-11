import { ChevronLeft } from "react-bootstrap-icons";
import moreImage from "../assets/images/more/insurance-icon-bb51c425.svg";
import visaImage from "../assets/images/more/visa-icon-d8507c8e.svg";
import toorImage from "../assets/images/more/gtour-icon-5e641f1b.svg";

function MoreServices() {
  return (
    <div className="container">
      <h2 className="text-textHeder text-[20px] font-bold pb-5">
        سایر خدمات علی بابا
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-5">
        <div className="cursor-pointer rounded-md border w-[450px] border-line px-5 py-5 flex justify-between">
          <div className="flex justify-center items-center">
            <img src={moreImage} alt="تصویر سایر خدمات علی بابا" />
            <p>سایر خدمات علی بابا</p>
          </div>
          <div className="flex items-center">
            <ChevronLeft />
          </div>
        </div>

        <div className="cursor-pointer rounded-md border w-[450px] border-line px-5 py-5 flex justify-between">
          <div className="flex justify-center items-center">
            <img src={visaImage} alt="تصویر ویزای سفر" />
            <p>ویزای سفر</p>
          </div>
          <div className="flex items-center">
            <ChevronLeft />
          </div>
        </div>

        <div className="cursor-pointer rounded-md border w-[450px] border-line px-5 py-5 flex justify-between">
          <div className="flex justify-center items-center">
            <img src={toorImage} alt="تصویر تور گروهی" />
            <p>تور گروهی</p>
          </div>
          <div className="flex items-center">
            <ChevronLeft />
            <span className="rounded-2xl p-2  text-[12px] bg-green">جدید</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreServicesMobile() {

    return(
    <div className="container">
      <h2 className="text-textHeder text-[15px] font-bold pb-5">
        سایر خدمات علی بابا
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-5">

        <div className="cursor-pointer rounded-xl bg-light w-[100px] p-3 flex justify-center">
          <div className="flex justify-center items-center flex-col">
            <img src={moreImage} alt="تصویر سایر خدمات علی بابا" />
            <p className="text-[12px]">سایر خدمات </p>
          </div>
        </div>

        <div className="cursor-pointer rounded-xl bg-light w-[100px] p-3 flex justify-center">
          <div className="flex justify-center items-center flex-col">
            <img src={visaImage} alt="تصویر ویزای سفر" />
            <p className="text-[12px]">ویزای سفر</p>
          </div>
        </div>

        <div className="cursor-pointer relative rounded-xl bg-light w-[100px] p-3 flex justify-center">
          <div className="flex justify-center items-center flex-col">
            <img src={toorImage} alt="تصویر تور گروهی" />
            <p className="text-[12px]">تور گروهی</p>
          </div>
            <span className="rounded-2xl p-2 absolute top-[-20%] left-[-10%] text-[12px] bg-green">جدید</span>
        </div>

      </div>
    </div>
    )
}

export default function content() {
  return (
    <>
      <section className="pt-64 md:pt-44 px-2 hidden md:flex justify-center">
        <MoreServices />
      </section>
      <section className="pt-64 md:pt-44 px-2 flex md:hidden justify-center">
        <MoreServicesMobile />
      </section>
    </>
  );
}
