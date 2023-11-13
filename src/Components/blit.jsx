// import { useRef } from "react";

// images
import bus1 from "../assets/images/blit/bus01-6af3a02d.png";
import bus2 from "../assets/images/blit/bus02-c540fe0e.png";
import bus3 from "../assets/images/blit/bus03-3bf1445d.png";

import { useState } from "react";

function MoreText({ moreOrLess }) {
  return (
    <div className="text-text">
      <p>
        سفر با اتوبوس به دلیل پایین آوردن هزینه‌ها و البته راحتی و امنیت بالا
        مورد استقبال مسافران است. با توسعه فناوری‌های نوین و ایجاد رفتار خرید
        اینترنتی، دیگر نیازی نیست برای خرید بلیط اتوبوس به ترمینال شرق و سایر
        ترمینال‌های اتوبوس‌رانی مراجعه کنید. علی‌بابا با توجه به اعتبار و
        پیشینه‌ای که در زمینه عرضه بلیط سفر و سایر خدمات گردشگری دارد، بهترین
        وب‌سایت رزرو بلیط اتوبوس است. شما می‌توانید در علی‌بابا بهتر
        <span id="dots">...</span>
        <span
          id="more"
          style={{
            display: "none",
          }}
        >
          سفر با اتوبوس به دلیل پایین آوردن هزینه‌ها و البته راحتی و امنیت بالا
          مورد استقبال مسافران است. با توسعه فناوری‌های نوین و ایجاد رفتار خرید
          اینترنتی، دیگر نیازی نیست برای خرید بلیط اتوبوس به ترمینال شرق و سایر
          ترمینال‌های اتوبوس‌رانی مراجعه کنید. علی‌بابا با توجه به اعتبار و
          پیشینه‌ای که در زمینه عرضه بلیط سفر و سایر خدمات گردشگری دارد، بهترین
          وب‌سایت رزرو بلیط اتوبوس است. شما می‌توانید در علی‌بابا بهترین قیمت را
          برای خرید بلیط اتوبوس پیدا کنید؛ همچنین این امکان را دارید تا از بین
          شرکت‎‌های اتوبوس‌رانی مختلف دست به انتخاب بزنید. علی‌بابا به عنوان
          مرجع فروش بلیط اینترنتی اتوبوس، تمام مسیرهای زمینی داخل کشور و تعدادی
          از مسیرهای خارجی را پوشش می‌دهد. در دسترس بودن لیست کاملی از شرکت‌های
          اتوبوس‌رانی در سایت علی‌بابا امکان خرید آنلاین بلیط اتوبوس را با قیمت
          مناسب برای شما ممکن می‌سازد. از طرف دیگر اگر ترجیح شما رفاه و آرامش
          بیشتر در طول سفر است، می‌توانید بلیط اتوبوسی را بخرید که اگرچه قیمتش
          کمی بیشتر است، اما از امکانات رفاهی بیشتری نیز برخوردار است و سفر را
          برای شما دلپذیرتر می‌کند. ضمنا شما هنگام خرید آنلاین بلیط اتوبوس از
          علی‌بابا، علاوه بر انتخاب صندلی، می‌توانید طول مسیر، ساعت حرکت و
          قوانین استرداد بلیط را نیز مشاهده کنید.
        </span>
        <button
          className="font-bold text-blue ms-2"
          onClick={moreOrLess}
          id="myBtn"
        >
          بیشتر
        </button>
      </p>
    </div>
  );
}

function MoreText2({ moreOrLess }) {
  return (
    <div className="text-text">
      <p>
        طبیعی است که گاهی اوقات، سفرتان به هر دلیلی لغو شود. در این زمان به
        دنبال استرداد بلیط (کنسلی) هستید. اگر بلیط‌تان را از علی‌بابا خریده‌اید،
        نگران نباشید؛ فرآیند استرداد بلیط اتوبوس در علی‌بابا راحت و بی‌دردسر
        است. کافی است وارد حساب کاربری‌تان شوید و روی نام کاربری‌تان کلیک کنید.
        در لیست نمایش داده شده، روی سفارشات و استردادها کلیک کنید. در صفحه بعد
        شماره سفارش خود را وارد و سپس روی جستجو کلیک کنید. پس از اتمام مراحل
        استرداد، پولی که بابت خرید بلیط پرداخته‌اید، در کوتاه‌ترین زمان ممکن به
        حساب شما برمی‌گردد. زمانی که بلیط را می‌خرید به قوانین بلیط هم دقت کنید.
        قوانین استرداد را در همان پنجره بلیط، در بخش «اطلاعا
        <span id="dots">...</span>
        <span
          id="more"
          style={{
            display: "none",
          }}
        >
          طبیعی است که گاهی اوقات، سفرتان به هر دلیلی لغو شود. در این زمان به
          دنبال استرداد بلیط (کنسلی) هستید. اگر بلیط‌تان را از علی‌بابا
          خریده‌اید، نگران نباشید؛ فرآیند استرداد بلیط اتوبوس در علی‌بابا راحت و
          بی‌دردسر است. کافی است وارد حساب کاربری‌تان شوید و روی نام کاربری‌تان
          کلیک کنید. در لیست نمایش داده شده، روی سفارشات و استردادها کلیک کنید.
          در صفحه بعد شماره سفارش خود را وارد و سپس روی جستجو کلیک کنید. پس از
          اتمام مراحل استرداد، پولی که بابت خرید بلیط پرداخته‌اید، در کوتاه‌ترین
          زمان ممکن به حساب شما برمی‌گردد. زمانی که بلیط را می‌خرید به قوانین
          بلیط هم دقت کنید. قوانین استرداد را در همان پنجره بلیط، در بخش
          «اطلاعات بیشتر» مشاهده خواهید کرد. این قوانین به شما می‌گوید که جریمه
          استرداد یا کنسلی بلیط اتوبوس چه میزان است.
        </span>
        <button
          className="font-bold text-blue ms-2"
          onClick={moreOrLess}
          id="myBtn"
        >
          بیشتر
        </button>
      </p>
    </div>
  );
}

const BusCard = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center mt-16">
      <div className="border border-line rounded-lg w-[400px] h-[570px]">
        <figure className="w-full relative">
          <img src={bus1} alt="اتوبوس ۱" />
          <figcaption className="text-white font-bold text-[20px] absolute bottom-1 right-1">
            معین پرویزی
          </figcaption>
        </figure>
        <p className="text-text p-2">
          خرید اینترنتی بلیط اتوبوس، مسافران را از اینکه خیلی زودتر در ترمینال
          حضور داشته باشند، بی‌نیاز ساخته است. شما می‌توانید همین طور که در خانه
          نشسته‌اید، خرید بلیط برای اتوبوس را انجام دهید. برای اینکه سفر را برای
          خود راحت‌تر و لذت‌بخش‌تر کنید، می‌توانید برای خرید بلیط VIP اقدام
          کنید. اگرچه قیمت بلیط اتوبوس VIP کمی گران‌تر است، اما ارزشش را دارد.
          ضمنا با خرید بلیط رویال سفر هم سفری بی‌دردسر را تجربه خواهید کرد، چرا
          که این شرکت هم شرایط رفاهی قابل‌قبولی برای مسافران فراهم می‌کند. هنگام
          خرید آنلاین بلیط اتوبوس از علی‌بابا کاربران این امکان را خواهند داشت
          که از میان شرکت‌های موجود، مناسب‌ترین انتخاب را برای خود داشته باشند.
        </p>
      </div>
      <div className="border border-line rounded-lg w-[400px] h-[570px]">
        <figure className="w-full relative">
          <img src={bus2} alt="اتوبوس ۱" />
          <figcaption className="text-white font-bold text-[20px] absolute bottom-1 right-1">
            معین پرویزی
          </figcaption>
        </figure>
        <p className="text-text p-2">
          رزرو بلیط راهکاری دوراندیشانه و عاقلانه برای کسانی است که می‌خواهند از
          زمان‌بندی سفرشان مطمئن باشند. این موضوع زمانی اهمیت بیشتری می‌یابد که
          بخواهید بلیط را برای زمان‌های پرسفر رزرو کنید. راحت‌ترین روش، رزرو
          اینترنتی بلیط اتوبوس از سایت علی‌بابا است. به این ترتیب می‌توانید ساعت
          حرکت و شرکت اتوبوس‌رانی موردنظرتان را انتخاب کنید. مراجعه به یک سایت
          رزرو بلیط‌های اتوبوس معتبر نظیر علی‌بابا، خیال شما را از تهیه بلیط
          اتوبوس برای تاریخ موردنظرتان آسوده می‌کند. امکاناتی نظیر مشاهده مسافت
          و قوانین استرداد و البته طول مسافت، علی‌بابا را به بهترین سامانه رزرو
          بلیط اتوبوس تبدیل کرده است.
        </p>
      </div>
      <div className="border border-line rounded-lg w-[400px] h-[570px]">
        <figure className="w-full relative">
          <img src={bus3} alt="اتوبوس ۱" />
          <figcaption className="text-white font-bold text-[20px] absolute bottom-1 right-1">
            معین پرویزی
          </figcaption>
        </figure>
        <p className="text-text p-2">
          همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه
          بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل
          متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها
          می‌توان به طول سفر و امکانات اتوبوس اشاره کرد. اما اگر به دنبال
          استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به
          علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا
          لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید. ضمنا
          قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال
          بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را
          براساس کمترین قیمت تعیین کنید.
        </p>
      </div>
    </div>
  );
};

export default function blit() {
  const moreOrLess = (e) => {
    if (
      e.target.previousElementSibling.previousElementSibling.style.display ===
      "none"
    ) {
      e.target.previousElementSibling.previousElementSibling.style.display =
        "inline";
      e.target.innerText = "بیشتر";
      console.log(e.target.previousElementSibling);
      e.target.previousElementSibling.style.display = "none";
    } else {
      e.target.previousElementSibling.previousElementSibling.style.display =
        "none";
      e.target.innerText = "بستن";
      e.target.previousElementSibling.style.display = "inline";
    }
  };
  return (
    <section className="flex justify-center items-center mt-10 mx-3">
      <div className="container">
        <h2 className="font-bold text-textHeder text-[25px] md:text-[35px] mb-2">
          بلیط اتوبوس
        </h2>

        <MoreText moreOrLess={moreOrLess} />

        <BusCard />

        <h2 className="font-bold text-textHeder text-[25px] md:text-[35px] mb-5 mt-20">
          استرداد بلیط اتوبوس
        </h2>

        <MoreText2 moreOrLess={moreOrLess} />
      </div>
    </section>
  );
}