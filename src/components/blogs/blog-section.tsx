import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import BlogCard from "./product-card";
import { data } from "@/utils/blog/blog-data";

function BlogSection() {
  return (
    <section className="blog-container py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col gap-3 lg:gap-10 ">
      <div className="blog-header-wrapper flex justify-between">
        <div className="entertaiment-header-title flex gap-2 ">
          <h1 className={`blog-title text-[22px] font-light`}>Blog</h1>{" "}
          <button className="show-button text-base font-semibold px-[10px] py-[2px] rounded-lg bg-dark-orange text-black">
            Show all
          </button>
        </div>
        <div className="blog-arrows-container flex gap-4">
          <IoIosArrowDropleftCircle className="left-angle w-7 h-7 text-dark-orange" />
          <IoIosArrowDroprightCircle className="right-angle w-7 h-7 text-dark-orange" />
        </div>
      </div>

      <div className="blog-card-container flex gap-4  overflow-x-scroll no-scrollbar overflow-hidden">
        {data.map((product, index) => (
          <BlogCard product={product} key={index} />
        ))}
      </div>
      
    </section>
  );
}

export default BlogSection;
