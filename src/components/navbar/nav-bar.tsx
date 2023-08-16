import Image from "next/image";
import Link from "next/link";
import data from "../../utils/Datas/nav-menu-links"

import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineMenu,
} from "react-icons/hi";
import { MdFavoriteBorder, MdPerson, MdClose } from "react-icons/md";

interface INavbar{
    open:boolean,
    setOpen:Function
}

function Navbar({open ,setOpen}:INavbar) {

  return (
    <div className="nav-container ">
      <nav className={`nav-wrrapper1 flex justify-between py-2 px-2 md:px-4 md:py-4 lg:px-[70px]  ${open ? "hidden" : ""} border-b-2 border-dark-gray`}>
        <HiOutlineMenu className="block md:hidden menu-icon w-5  h-5 mt-1 text-light-gray hover:text-dark-orange" onClick={() => setOpen(!open)} />
        <Image
          src={"/logo/logo.png"}
          width={88}
          height={25}
          alt="logo"
          className="nav-logo hidden md:block"
        />
        <div className="nav-search-container flex gap-1 border-2 border-light-gray rounded">
          <input className="search-input w-[300px] lg:w-[500px]   bg-transparent px-2 outline-none border-none" />
          <HiOutlineSearch className="search-icon w-5 h-5 text-light-gray mt-[2px] hover:text-dark-orange" />
        </div>

        <div className="nav-wrapper1-links gap-3 hidden sm:flex items-center">
          <HiOutlineShoppingCart className="cart-icon  w-5 h-5 text-light-gray" />
          <MdFavoriteBorder className="wishlist-icon  w-5 h-5 text-light-gray" />
          <MdPerson className="person-icon  w-5 h-5 text-light-gray" />

          <Link href={"#"} className="login-text hidden md:block">Login</Link>
          <div className="line w-[1px] h-[15px] bg-light-gray my-1 py-1 hidden md:block"></div>
          <Link href={"#"} className="register-text hidden md:block">Regster</Link>

        </div>
      </nav>
      <nav className="hidden md:flex menu-links md:gap-2 lg:gap-5 py-2 px-2 md:px-4 md:py-4 lg:px-[70px] ">
           {
            data?.map((item) => 
            <Link href={item.url} key={item.id} className="link-name text-base font-semibold text-light-gray">{item.name}</Link>
            )
           }


        </nav>
      {/* for mobile */}

{
    !open ? "" : (
        <nav className="nav-wrapper2 flex flex-col w-[320px] bg-dark-gray  h-screen ">
        <div className="nav-menu-logo flex justify-between p-3">
          <Image
            src={"/logo/logo.png"}
            width={88}
            height={25}
            alt="logo"
            className="nav-logo"
          />
          <MdClose className="close icon" onClick={() => setOpen(!open)} />
        </div>
        <div className="menu-links flex flex-col gap-3 mt-4 ml-3">
           {
            data?.map((item) => 
            <Link href={item.url} key={item.id}>{item.name}</Link>
            )
           }


        </div>
      </nav>
    )
}

    </div>
  );
}


export default Navbar;
