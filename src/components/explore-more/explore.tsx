import React from "react";
import ProductCard from "../new-physical-listing/product-card";
import productData from "@/utils/listings/product-data";
import Image from "next/image";

function Explore() {
  return (
    <section className="explore-section py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col md:flex-row gap-4  ">
      <div className="product-card  ">
        <ProductCard item={productData[3]} />
      </div>

      <div className="explore-container relative w-full h-[350px]">
        <Image
          fill
          src={"/products/blogimage.png"}
          alt="image"
          className="background-image absolute object-cover "
        />
        <div className="eplore-text-wrapper absolute flex my-11 mx-11  flex-col gap-4">
          <h1 className="explore-higlight text-lg lg:text-3xl font-bold capitalize text-light-gray">
            EXPLORE THE STARS & TAME TEMS IN JULY CHOICE!
          </h1>
          <p className="explore-description text-sm lg:text-lg font-normal">
            A boilerplate statement or response generally refers to a message
            used with minimal effort for multiple different situation Juega a la
            temporada 1 hoy y lucha para recolectar frutas Wumpa en un juego de
            4 contra 4 para sembrar el caos Thought drawing Wattson with{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
