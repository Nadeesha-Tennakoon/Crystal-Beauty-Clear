import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altName, setAltName] = useState("");
  const [price, setPrice] = useState("");
  const [labeledPrice, setLabeledPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    const altNameInArray = altName.split(",");
    const product = {
      productId: productId,
      name: name,
      altName: altNameInArray,
      price: price,
      labeledPrice: labeledPrice,
      description: description,
      stock: stock,
      images: [
        "https://picsum.photos/id/25/200/300",
        "https://picsum.photos/id/26/200/300",
        "https://picsum.photos/id/27/200/300",
      ],
    };
    const token = localStorage.getItem("token");
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/product", product, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        toast.success("Product added successfully");
        navigate("/admin/products");
      })
      .catch(() => {
        toast.error("Product adding failed");
      });
  }

  return (
    <div className="w-full h-full rounded-lg flex justify-center items-center">
      <div className="w-[500px] h-[600px] rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 m-[10px]">
          Add Product
        </h1>
        <input
          value={productId}
          onChange={(e) => {
            setProductId(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Product ID"
        />
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Product Name"
        />
        <input
          value={altName}
          onChange={(e) => {
            setAltName(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Alternative Names"
        />
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Price"
        />
        <input
          value={labeledPrice}
          onChange={(e) => {
            setLabeledPrice(e.target.value);
          }}
          type="number"
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Labeled Price"
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Description"
        />
        <input
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
          type="number"
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="stock"
        />
        <div className="w-[400px] h-[100px]  flex justify-between items-center rounded-lg">
          <Link
            to={"/admin/products"}
            className="bg-red-500 text-white p-[10px] w-[180px] text-center rounded-lg m-[5px] hover:bg-red-600 "
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-green-500 cursor-pointer text-white p-[10px] w-[180px] text-center rounded-lg ml-[10px] hover:bg-green-600"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
