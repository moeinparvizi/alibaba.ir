import Home from "./icons/homeIcon"
import Plus from "./icons/plusIcon"
import Travel from "./icons/mytravels"
import User from "./icons/user"

export default function subnavmobile() {
  return (
    <section className="flex md:hidden fixed z-50 bottom-0 w-full border-t border-line">
        <div className="flex w-full items-center bg-white h-16">
            <figure className="flex flex-col justify-center items-center text-blue w-[25%]">
                <Home />
                <figcaption className="text-[12px]">خانه</figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center text-textHeder w-[25%]">
                <Plus />
                <figcaption className="text-[12px]">پلاس</figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center text-textHeder w-[25%]">
                <Travel />
                <figcaption className="text-[12px]">سفر های من</figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center text-textHeder w-[25%]">
                <User />
                <figcaption className="text-[12px]">حساب کاربری</figcaption>
            </figure>
        </div>
    </section>
  )
}
