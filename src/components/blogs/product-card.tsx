import Image from "next/image";

interface IBlogCard {
  product: {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
  };
}

function BlogCard({
  product: { id, image, title, description, date },
}: IBlogCard) {
 
  return (
    <div className="blog-card min-w-[275px] h-[600px] cursor-pointer">
      <div className="blog-imag-wrapper relative w-full h-[400px] bg-white">
        <Image
          src={image}
          fill
          alt={title}
          className="blog-image absolute object-cover"
        />
        <h2
          className="image-date absolute top-0 right-0 px-[10px] py-[5px] bg-[#00000099] text-light-orange rounded-[0_12px_0_12px]"
        >
          {date}
        </h2>
      </div>
      <h1 className="blog-title py-4 text-lg font-extrabold text-light-gray ">{title}</h1>
      <p className="blog-descripttion  text-base font-normal text-light-gray ">{description}</p>
    </div>
  );
}

export default BlogCard;
