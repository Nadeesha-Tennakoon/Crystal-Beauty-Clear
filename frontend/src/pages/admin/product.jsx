import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/product")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);
  return (
    <div className="h-full w-full rounded-lg relative ">
      <Link
        to={"/admin/addProduct"}
        className="text-white absolute bg-gray-700 p-[12px] text-3xl rounded-full hover:bg-gray-300 hover:text-gray-700 right-5 bottom-5"
      >
        <FaPlus />
      </Link>
      <table className="w-full">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>price</th>
            <th>Labeled Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            console.log("Mapping " + product.productId);
            return (
              <tr
                key={index}
                className="border-b-2 border-gray-300 text-center cursor-pointer hover:bg-gray-700 hover:text-white"
              >
                <td className="p-2">{product.productId}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.labledprice}</td>
                <td className="p-2">{product.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
