"use client";
import Image from "next/image";
import {data} from "../../utils/listings/categories";
import ListingCard from "./listing-card";
import { useState } from "react";
import productdata from "../../utils/listings/product-data";
import ProductCard from "./product-card";

function NewListing() {
  const [catIndex, setCatIndex] = useState<number>(0);

  return (
    <section className="new-listing-section py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col gap-3 lg:gap-10">
      <div className="new-listing-highlights ">
        <div className="listing-title flex justify-between">
          <h1 className="lisiting-title text-xl font-light ">
            Newest physical listing
          </h1>{" "}
          <button className="show-button text-base font-semibold px-[10px] py-[2px] rounded-lg bg-dark-orange text-black">
            Show all
          </button>
        </div>

        <div className="lisiting-categories flex gap-5 pt-4 overflow-x-scroll no-scrollbar">
          {data?.map((item,i) => (
            <ListingCard
              key={item?.id}
              item={item}
              onClick={() => setCatIndex(i)}
              catIndex={catIndex+1}
            />
           ))}

        </div>

            <div
              className={`tag-container py-[10px] px-[15px] flex flex-wrap gap-[70px]
                 bg-dark-gray
              `}
            >
              {(data[catIndex]?.tags).map((tag, i) => (
                <div
                  key={i}
                  className="tag-wrapper h-[60px] flex flex-col justify-between gap-2"
                >
                  <div className="tag-image relative w-[90px] h-[30px] flex justify-center">
                  <Image
                    src={tag?.image}
                   fill
                    alt="tag"
                    className="tag-image absolute object-contain"
                  />
                  </div>
                  <h1 className="tag-items text-sm md:text-base  font-semibold text-light-gray ">
                    &#40; {tag?.total} {""} items &#41;
                  </h1>
                </div>
              ))}
            </div>

      </div>

      <div className="newlisting-containers w-full h-screen lg:h-[730px] flex flex-col md:flex-row md:justify-between gap-5 ">
        <div className="listing-image-container min-w-[320px] lg:min-w-[540px] flex justify-center">
          <Image
              src={"/products/fox.png"}
              width={560}
              height={650}
              alt="fox"
              className="listing-image"
            />
          
        </div>

        <div className="listing-card-container  flex flex-wrap  gap-5  md:overflow-y-scroll md:overflow-x-hidden overflow-x-scroll no-scrollbar ">
          {productdata
            .filter((data) => data.type === "trending")
            .map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default NewListing;
