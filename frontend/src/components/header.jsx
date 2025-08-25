import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-[70px] w-full justify-start lg:justify-center flex relative items-center bg-gray-100">
      <GiHamburgerMenu
        className=" lg:hidden text-3xl mx-4"
        onClick={() => setIsOpen(true)}
      />
      <div className="hidden lg:flex w-[500px] h-full items-center justify-evenly text-xl text-pink-400">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/cart" className="absolute right-[30px] text-3xl">
          <BsCart4 />
        </Link>
      </div>
      {isOpen && (
        <div className="fixed top-0 z-[9999] left-0 bg-[#00000040] w-full h-screen flex">
          <div className="w-[300px] h-full bg-white flex flex-col justify-start items-start p-4">
            <GiHamburgerMenu
              className="text-3xl text-pink-400"
              onClick={() => setIsOpen(false)}
            />
            <Link to="/" className="text-xl text-pink-400  my-4">
              Home
            </Link>
            <Link to="/products" className="text-xl text-pink-400  my-4">
              Products
            </Link>
            <Link to="/contact" className="text-xl text-pink-400  my-4">
              Contact us
            </Link>
            <Link to="/review" className="text-xl text-pink-400  my-4">
              Reviews
            </Link>
            <Link to="/cart" className="text-xl text-pink-400  my-4">
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
