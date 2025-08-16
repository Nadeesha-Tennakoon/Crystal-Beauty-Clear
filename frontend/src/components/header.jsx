import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[70px] w-full flex justify-center items-center bg-gray-100">
      <div className="w-[500px] h-full flex items-center justify-evenly text-xl text-pink-400">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/review">Reviews</Link>
      </div>
    </header>
  );
}
