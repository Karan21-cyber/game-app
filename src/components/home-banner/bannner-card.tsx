import Image from "next/image";
import React from "react";
interface IBannerCard {
  item: {
    id: number;
    image: string;
    icon: string;
    discount: string;
  };
}

function BannerCard({item:{image,icon,discount}}:IBannerCard) {
  return (
    <div className="banner-Card relative">
      <Image
        src={image}
        width={450}
        height={170}
        alt="banner"
        className="bannner-image"
      />

      <Image
        src={icon}
        width={18}
        height={18}
        alt="banner"
        className="bannner-icon absolute top-1 left-1 lg:w-[25px] lg:h-[25px]"
      />
      <h1 className="banner-discount absolute bottom-1 text-lg lg:text-4xl  font-bold right-1 text-dark-orange">
        {discount}
      </h1>
    </div>
  );
}

export default BannerCard;
