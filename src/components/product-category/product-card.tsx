import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";

interface IProductCard {
  item:{
    imdb_id:string,
    title:string
  },
  params:string
}

function ProductCard({item:{imdb_id, title},params}:IProductCard) {
  return (
    <div className="product-card-container min-w-[300px] w-[300px] h-[525px] flex flex-col rounded-2xl overflow-hidden ">
      <a href={`/products/${params}/${imdb_id}`} className="product-image-wrapper relative w-full h-[500px] overflow-hidden" >
        <Image
          src={'/products/strongman2.png'}
          fill
          alt={title}
          className="product-image absolute object-contain hover:scale-110 hover:transition hover:duration-700 hover:ease-out"
        />
      </a>
      <h1 className="product-description text-lg font-semibold w-full h-[64px] p-[10px] bottom-0 truncate ">
        {title}
      </h1>

      <div className="product-card-info w-full flex rounded-b-xl overflow-hidden">
        <div
          className="product-card-info-icon w-full bg-dark-yellow
         h-12 flex items-center justify-center gap-2 text-black  cursor-pointer"
        >
          <HiShoppingCart className="shopping-cart-icon w-[21px] h-[20px]" />
          <h2 className="add-to-cart text-lg font-semibold">Add To Cart</h2>
        </div>

        <div className="price-section w-full flex items-center text-dark-yellow justify-center gap-2 bg-dark-gray cursor-pointer">
          <MdFavorite className="shopping-cart-icon w-[21px] h-[20px]" />
          <h2 className="add-to-cart text-lg font-semibold " >
            Favorite
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
