import mobile from "../assets/images/barcode/app-mobile@4x-e3e3b7dc.webp";
import qr from "../assets/images/barcode/qrcode-56155e39.png";
import android from "../assets/images/barcode/download (1).png";
import apple from "../assets/images/barcode/download.png";
import { ChevronLeft } from "react-bootstrap-icons";

export default function barcode() {
  return (
    <section className="flex justify-center mt-5 items-center">
      <div className="container">
        <div className="border border-line rounded-md px-[12px] md:px-[64px] pt-[12px] md:pt-2 flex justify-between mx-3 md:mx-10">
          <div className="w-[40%] flex items-center justify-center gap-10">
            <figure className="hidden md:flex">
              <img src={qr} alt="qrcode picture" />
            </figure>
            <div>
              <h3 className="text-[16px] md:text-[30px] text-textHeder mb-1 md:mb-2 -translate-y-1 font-bold">اپلیکیشن علی‌بابا</h3>
              <h6 className="hidden md:flex text-[18px] mb-10">سریع‌تر و مطمئن‌تر به سفر بروید ‌</h6>
              <h6 className="flex md:hidden text-[12px] mb-5 -translate-y-1">همه سفر ها در جیب شماست</h6>
              <a href="#" className="hidden md:flex text-blue gap-2 text-[18px] items-center mb-10">مشاهده لینک های دانلود <ChevronLeft /></a>
              <a href="#" className="md:hidden rounded-2xl bg-blue text-white p-1 text-center w-24 flex -translate-y-2">راهنمای نصب</a>
              <div className="hidden md:flex items-center gap-1 text-[14px] text-line">
                <img src={apple} className="w-[7%]" alt="apple logo" />
                <img src={android} className="w-[7%]" alt="android logo" />
                قابلیت نصب روی Android و iOS
              </div>
            </div>
          </div>

          <figure className="w-[30%]">
            <img className="h-[120px] md:h-auto" src={mobile} alt="two mobile picture" />
          </figure>
        </div>
      </div>
    </section>
  );
}
