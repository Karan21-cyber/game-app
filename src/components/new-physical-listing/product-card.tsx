import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";

interface IProductCard {
  item: {
    id: number;
    image: string;
    name: string;
    discount: number;
    price: number;
    tags: {
      icon: string;
    }[];
    type: string;
  };
}

function ProductCard({
  item: { id, image, name, discount, price, tags },
}: IProductCard) {
  let discountprice = price * (discount / 100);
  return (
    <div className="product-card-container w-[360px] h-[350px]">
      <div className="product-image-wrapper relative w-full h-[300px] bg-white">
        <Image
          src={image}
          fill
          alt={name}
          className="product-image absolute object-contain"
        />
        <MdFavorite className="wishlist-icon absolute top-5 right-1 w-6 h-6 " />
        <h1 className="product-discount absolute top-5 left-0 px-[10px] py-[5px] text-4xl  font-bold bg-dark-orange rounded-r-lg ">
          %{discount}
        </h1>

        <h1 className="product-discount w-full absolute bottom-0 text-center py-[15px] px-[10px] text-light-gray bg-background-color">
          {name}
        </h1>
      </div>
      <div className="product-card-info flex gap-2 justify-between">

        {tags?.map((tag, i) => (
          <div key={i} className="product-card-info-icon border-[1px]   border-light-gray p-2 flex items-center justify-center rounded-b-lg">
            <Image
              src={tag?.icon}
              width={25}
              height={25}
              alt="tag"
              className="listing-image"
            />
          </div>
        ))}

        <div
          className="product-card-info-icon border-[1px] border-light-gray p-2 
         h-12 flex items-center justify-center gap-2 w-[155px] rounded-b-lg"
        >
          <HiShoppingCart className="shopping-cart-icon w-[21px] h-[20px]" />
          <h2 className="add-to-cart text-[18px] font-semibold">Add To Cart</h2>
        </div>

        <div className="price-section flex items-center justify-center gap-3 pr-1">
          <h1 className="price text-dark-orange font-bold text-[20px]">
            ${price}
          </h1>
          <h1 className="price text-light-gray font-light text-[18px] line-through">
            ${discountprice}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
