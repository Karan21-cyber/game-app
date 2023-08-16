import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";

interface IProductCard {
  product: {
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
  product: { id, image, name, discount, price, tags, type },
}: IProductCard) {
  let discountprice = price * (discount / 100);
  return (
    <div className="product-card-container min-w-[420px] h-[720px] flex flex-col ">
      <div className="product-image-wrapper relative w-full h-[600px]">
        <Image
          src={image}
          fill
          alt={name}
          className="product-image absolute object-contain"
        />
       <MdFavorite className="wishlist-icon absolute top-5 right-1 w-6 h-6 " />
        <h1 className="product-discount absolute top-5 left-0 px-[10px] py-[5px] text-3xl  font-bold bg-dark-orange rounded-r-lg ">
          %{discount}
        </h1>

        <div className="product-tags-container w-full absolute bottom-0 text-center py-[15px] px-[10px] text-light-gray bg-background-color flex justify-between">
          {tags?.map((tag, i) => (
            <div  key={i} className="tags-icons relative w-full h-[20px] ">
              <Image
              fill
              src={tag.icon}
              alt="tag"
              className="product-image  absolute object-contain"
            />
            </div>
          ))}
        </div>
      </div>

      <h1 className="product-description text-[18px] font-medium w-full h-[64px] p-[10px] flex justify-center items-center bottom-0">
        {name}
      </h1>

      <div className="product-card-info w-full flex rounded-b-xl overflow-hidden">
        <div
          className="product-card-info-icon w-full bg-dark-yellow
         h-12 flex items-center justify-center gap-2 text-black "
        >
          <HiShoppingCart className="shopping-cart-icon w-[21px] h-[20px]" />
          <h2  className="add-to-cart text-[18px] font-semibold">Add To Cart</h2>
        </div>

        <div className="price-section w-full flex items-center text-dark-yellow justify-center gap-2 bg-dark-gray">
          <h1 className="price-dark-orange font-bold text-base  lg:text-[20px]">
            ${price}
          </h1>
          <h1 className="price-dark-gray font-light text-base text-light-gray lg:text-lg line-through">
            ${discountprice}
          </h1>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
