"use client";
import Link from "next/link";
import foooterData from "../../utils/footer/foooter-data";
import IconComponent from "./social-link";

function Footer() {
  return (
    <footer className="footer-container  py-5 px-2 md:px-4 md:py-6 lg:px-[70px] grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="footer-service flex flex-col gap-4">
        <h1 className="links-title text-base font-bold   text-light-gray">
          Service-Hotline
        </h1>
        <p className="links-info text-base font-light   text-light-gray">
          {" "}
          Telefonische Beratung unter:
        </p>
        <h1 className="phone-number text-base font-bold  text-light-gray">
          +49 (0) 771 / 175 131 69
        </h1>
        <div className="sercice-timing">
          <h1 className="sercice-days text-base font-semibold   text-light-gray">
            Monday - Friday
          </h1>{" "}
          <h1 className="serviec-open-time  text-base font-semibold   text-light-gray">
            08:00 - 12.00 hrs
          </h1>{" "}
          <h1 className="serviec-open-time  text-base font-semibold  text-light-gray">
            13:00 - 17.00 hrs
          </h1>
        </div>
      </div>

      {foooterData.map((data, i) => (
        <div className="footer-card flex flex-col gap-4 " key={i}>
          <h1 className="links-title text-[18px] font-bold  mb-2 text-light-gray">
            {data?.title}
          </h1>
          {data?.links.map((link, idx) => (
            <Link
              href={link?.url}
              key={idx}
              className="footer-link text-sm font-semibold text-light-gray"
            >
              {link?.name}
            </Link>
          ))}
          <div className="social-link-container flex gap-4">
            {data?.sociallinks?.map((item, index) => (
              <IconComponent item={item} key={index} />
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
