import bag1 from "../assets/images/footerTop/download.webp";
import bag2 from "../assets/images/footerTop/download (1).webp";
import bag3 from "../assets/images/footerTop/download (2).webp";

function TopFooter() {
  return (
    <div className="flex p-5 justify-around">
      <figure className="flex justify-center items-center gap-3 w-[350px]">
        <img src={bag1} className="w-[100px]" alt="badg1" />
        <figcaption className="flex flex-col"> <h6 className="text-textHeder font-bold text-[20px]">رتبه یک سفر</h6> <p className="text-text"> ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور) </p> </figcaption>
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
        <div className="[&>ul]:list-none flex justify-between">
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

        <div className="flex flex-col w-[45%] py-5">
            
        </div>
    </div>
  );
}

export default function footer() {
  return (
    <footer className="border-t border-line flex justify-center items-center mt-20">
      <div className="container">
        <TopFooter />

        <MainFooter />
      </div>
    </footer>
  );
}
