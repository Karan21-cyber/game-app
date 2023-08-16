"use client";
import Image from "next/image";

interface IListingCard {
  item: {
    id: number;
    name: string;
    icon: string;
    tags: {
      image: string;
      total: number;
    }[];
  };
  catIndex: number;
  onClick: () => void;
}

function ListingCard({
  item: { id, name, icon, tags },
  onClick,
  catIndex,
}: IListingCard) {


  return (
    <div className="listing-card-container flex flex-col  ">
        <div
          className={`listing-card p-4  ${
            catIndex === id ? "bg-dark-gray" : ""
          }  hover:cursor-pointer flex justify-center gap-2 `}
          onClick={onClick}
        >
          <Image
            src={icon}
            width={24}
            height={24}
            alt={name}
            className="tag-image object-contain"
          />
          <h1 className="icon-name text-sm md:text-base font-semibold text-light-gray ">
            {name}
          </h1>
        </div>
    </div>
  );
}

export default ListingCard;
