import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.mabda) {
    errors.mabda = "این فیلد خالی است";
  } else if (values.mabda.length == null || values.mabda.length == 0) {
    errors.mabda = "این فیلد خالی است";
  }

  if (!values.maghsad) {
    errors.maghsad = "این فیلد خالی است";
  } else if (values.maghsad.length == null || values.maghsad.length == 0) {
    errors.maghsad = "این فیلد خالی است";
  }

  if (!values.tarikh) {
    errors.tarikh = "این فیلد خالی است";
  } else if (values.tarikh.length == null || values.tarikh.length == 0) {
    errors.tarikh = "این فیلد خالی است";
  }

  return errors;
};

export default function SubTab() {
  const formik = useFormik({
    initialValues: {
      mabda: "",
      maghsad: "",
      tarikh: "",
    },
    validate,
    onSubmit: (values) => {
      alert("مبدا شما :" + " " + JSON.stringify(values.mabda));
      alert("مقصد شما :" + " " + JSON.stringify(values.maghsad));
      alert("تاریخ حرکت :" + " " + JSON.stringify(values.tarikh));
    },
  });

  const lab = (e) => {
    e.target.parentElement.children[0].classList.add('!top-[-20%]')
  }
  return (
    <div className="hidden md:flex justify-center items-center p-5">
      <form onSubmit={formik.handleSubmit} className="flex gap-5">
        <div className="relative flex justify-center items-center">
          <div className="flex justify-center flex-col relative items-center">
            <label htmlFor="mabda" className="absolute top-[20%] bg-white px-5 text-line left-[75%] -translate-x-1/2">مبدا</label>
            <input
              id="mabda"
              name="mabda"
              value={formik.values.mabda}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              // placeholder="مبدا"
              className="mabda-maghsad-tarikh mabda"
              onFocus={lab}
            />
            {formik.touched.mabda && formik.errors.mabda ? (
              <div className="text-[#d22d]">{formik.errors.mabda}</div>
            ) : null}
          </div>
          <div className="flex justify-center items-center relative flex-col">
            <label htmlFor="maghsad" className="lab absolute top-[20%] bg-white px-5 text-line left-[75%] -translate-x-1/2">مقصد</label>
            <input
              id="maghsad"
              name="maghsad"
              value={formik.values.maghsad}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              // placeholder="مقصد"
              className="mabda-maghsad-tarikh maghsad"
              onFocus={lab}
            />
            {formik.touched.maghsad && formik.errors.maghsad ? (
              <div className="text-[#d22d]">{formik.errors.maghsad}</div>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center relative justify-center">
            <label htmlFor="tarikh" className="absolute top-[20%] bg-white px-5 text-line left-[75%] -translate-x-1/2">تاریخ</label>
          <input
            id="tarikh"
            name="tarikh"
            value={formik.values.tarikh}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            // placeholder="تاریخ حرکت"
            className="mabda-maghsad-tarikh"
              onFocus={lab}
          />
          {formik.touched.tarikh && formik.errors.tarikh ? (
            <div className="text-[#d22d]">{formik.errors.tarikh}</div>
          ) : null}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="bg-yellow w-48 h-[50px] rounded-md px-5 py-2">
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}
