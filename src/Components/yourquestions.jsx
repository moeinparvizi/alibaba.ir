import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import QuestionIcon from "./icons/questions";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid #BEC6CC`,
  borderRadius: "20px",
  // marginTop: '12px',
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:last-child": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 1)",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="flex justify-center items-center mx-5 md:mx-10 mt-10">
      <div className="container">
        <h3 className="text-textHeder text-[20px] md:text-[30px] mb-2">
          پرسش های شما
        </h3>

        <div className="border border-line rounded-lg">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به
                  آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز
                  داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید
                  تا صندلی متعلق به خودتان باشد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  نحوه رزرو بلیط اتوبوس در علی بابا چگونه است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن علی‌بابا
                  (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را
                  انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ
                  مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را
                  بخرید.برای مطالعه راهنمای گام‌به‌گام و تصویری خرید اینترنتی
                  بلیط اتوبوس، می‌توانید سری به اینجا بزنید.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  استعلام بلیط اتوبوس علی‌بابا چگونه است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن
                  علی‌بابا بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل
                  اتوبوس‌های شرکت‌های مختلف را ببینید.بعد از خرید، اگر بخواهید
                  جزئیات بلیط را ببینید، وارد حساب کاربری‌تان شوید و روی گزینه
                  «سفرهای من» بزنید.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود
                  ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی
                  با اطلاعات جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد
                  بلیط اتوبوس با درصدی جریمه همراه است (گاهی تا 100 درصد جریمه).
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده
                  نگارشی باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر
                  هم خطا در انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و
                  بلیط بخرید. طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه
                  همراه است.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک و ایمیل از
                  علی‌بابا برای شما ارسال خواهد شد. در این پیامک و ایمیل شماره
                  سفارش شما، اطلاعات اتوبوس و همچنین لینک دانلود بلیط وجود دارد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  در صورت خرید بلیط و سوارنشدن به اتوبوس، امکان بازگشت وجه
                  پرداختی بلیط وجود دارد؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  بله. شما می‌توانید با مراجعه حضوری به تعاونی، بلیط اتوبوس
                  خودتان را استرداد کنید. درصد جریمه بلیط شما در قسمت «قوانین
                  استرداد» بلیط نوشته شده است.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا امکان خرید تلفنی بلیط اتوبوس وجود دارد؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  خیر. شما باید برای خرید بلیط اتوبوس به وب‌سایت یا اپلیکیشن
                  علی‌بابا مراجعه کنید.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel10d-content"
              id="panel10d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق
                  می‌کند؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛
                  اما توجه داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین
                  راه خرید بلیط است. در هر زمان از شبانه‌روز امکان دسترسی به
                  تمام بلیط‌ها در علی بابا وجود دارد. علاوه بر این، در خرید
                  اینترنتی بلیط اتوبوس در علی‌بابا، امکان جانمایی صندلی هم وجود
                  دارد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel11d-content"
              id="panel11d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات زنده در اتوبوس
                  وجود ندارد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel12d-content"
              id="panel12d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  مدارک مورد نیاز برای استفاده از اتوبوس چیست؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای
                  دریافت بلیط الزامی است.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel13d-content"
              id="panel13d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  آیا برای استفاده از اتوبوس نیاز به پرینت بلیط است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  برای استفاده از بلیط‌ اتوبوس، چاپ بلیط در دفتر تعاونی مربوطه
                  با ارائه پیامک شماره بلیط و کارت شناسایی معتبر الزامی است.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel14d-content"
              id="panel14d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور
                  داشته باشیم؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست
                  حداکثر 30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته
                  باشد.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          >
            <AccordionSummary
              aria-controls="panel15d-content"
              id="panel15d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  استرداد بلیط اتوبوس در وب‌سایت علی‌بابا چگونه است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  برای استرداد آنلاین بلیط اتوبوس وارد «حساب کاربری» شوید و از
                  بخش «سفارشات و استردادها»، سفارش مدنظرتان را انتخاب کنید؛ بعد
                  از انتخاب گزینه استرداد و تکمیل مراحل، بلیط مدنظر طبق قوانین و
                  مقررات استرداد می‌شود. در صورت قابل‌استرداد‌بودن بلیط
                  خریداری‌شده، مبلغ استرداد به همان شماره حسابی واریز می‌شود که
                  خرید با آن انجام شده است.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          >
            <AccordionSummary
              aria-controls="panel16d-content"
              id="panel16d-header"
            >
              <Typography className="flex justify-center items-center">
                <div className="rounded-full text-blue bg-[rgba(0,119,219,.2)] p-1 me-2">
                  <QuestionIcon />
                </div>
                <p className="font-bold text-textHeder">
                  میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-text">
                  طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است.
                  البته برخی از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40
                  کیلوگرم را نیز ارائه می‌دهند. همچنین یکی دیگر از مسائلی که در
                  این زمینه باید مد نظر قرار بدهید، تعاونی اتوبوس شماست. معمولا
                  تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص
                  خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر
                  فرق می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در
                  حین سفر به مشکل برنخورید، به تعاونی که از آن بلیط تهیه
                  کرده‌اید زنگ زده و از آن‌ها سوال کنید. به این موضوع هم دقت
                  کنید که اگر میزان بار اضافه شما بیش از حد باشد، متصدی اتوبوس
                  ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این نوع
                  مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار
                  اضافه‌تان را پرداخت کنید تا بتوانید همه وسیله‌هایتان را با
                  خودتان حمل کنید.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
