import productData from "@/utils/listings/product-data";
import {IoIosArrowDroprightCircle ,IoIosArrowDropleftCircle} from "react-icons/io"
import ProductCard from "./product-card";

function Entertainment() {
  return (
    <section className="entertainment-container py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col gap-3 lg:gap-10 ">
      <div className="entertainment-header-wrapper flex justify-between">
        <div className="entertaiment-header-title flex gap-2 ">
          <h1 className={`entertainment-title text-[22px] font-light`}>
          BANDAI NAMCO Entertainment Games
          </h1>{" "}
          <button className="show-button text-base font-semibold px-[10px] py-[2px] rounded-lg bg-dark-orange text-black">
            Show all
          </button>
        </div>
        <div className="entertainment-arrows-container flex gap-4">
          <IoIosArrowDropleftCircle className="left-angle w-7 h-7 text-dark-orange"/>
          <IoIosArrowDroprightCircle className="right-angle w-7 h-7 text-dark-orange"/>
        </div>
      </div>

      <div className="entertainment-card-container flex gap-4   overflow-x-scroll no-scrollbar">
        {
          productData.filter((item,i) => item.type === "entertainment").map((product,index) => 
          (
            <ProductCard product={product} key={index}/>
          ))
        }
      </div>
    </section>
  );
}

export default Entertainment;
