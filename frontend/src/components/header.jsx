import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
  return (
    <header className="h-[70px] w-full flex relative justify-center items-center bg-gray-100">
      <div className="w-[500px] h-full flex items-center justify-evenly text-xl text-pink-400">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/cart" className="absolute right-[30px] text-3xl">
          <BsCart4 />
        </Link>
      </div>
    </header>
  );
}
