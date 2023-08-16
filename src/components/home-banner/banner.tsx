import Image from "next/image";
import data from "../../utils/Datas/banner-data";
import BannerCard from "./bannner-card";

function Banner() {
  return (
    <section className="header-container py-2 px-2 md:px-4 md:py-4 lg:px-[70px] flex flex-col gap-2 xl:flex-row">
      <Image
        src={"/products/futureFight.png"}
        width={1300}
        height={500}
        alt="banner"
        className="bannner-image"
      />
      <div className="banner-offer flex xl:flex-col gap-2 ">
        {data?.map((item) => (
          <BannerCard item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
}

export default Banner;
