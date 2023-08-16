import Link from "next/link";
import paymentcard from "../../utils/card/card-data";
import Image from "next/image";
function PaymentCards() {
  return (
    <div className="payment-card-container py-5 px-2 md:px-4 md:py-6 lg:px-[70px] ">
      <div className="payment-card-wrapper w-full py-5 bg-dark-gray flex justify-center flex-wrap gap-4 md:gap-10 rounded-t-xl">
        {paymentcard.map((item, i) => (
          <Link
            href={item?.link}
            className="payment-card relative w-[80px] h-[30px] md:w-[100px] md:h-[40px] "
            key={i}
          >
            <Image
              src={item?.image}
              fill
              alt={item?.name}
              className="payment-card-image absolute object-contain "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PaymentCards;
