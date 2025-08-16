import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import mediaUpload from "../../utils/mediaUpload";

export default function EditProductForm() {
  const locationData = useLocation();
  const navigate = useNavigate();
  if (locationData.state == null) {
    toast.error("Please select a product to edit");
    window.location.href = "/admin/products";
  }
  const [productId, setProductId] = useState(locationData.state.productId);
  const [name, setName] = useState(locationData.state.name);
  const [altName, setAltName] = useState(locationData.state.altNames.join(","));
  const [price, setPrice] = useState(locationData.state.price);
  const [labeledPrice, setLabeledPrice] = useState(
    locationData.state.labeledPrice
  );
  const [description, setDescription] = useState(
    locationData.state.description
  );
  const [stock, setStock] = useState(locationData.state.stock);
  const [images, setImages] = useState([]);

  async function handleSubmit() {
    const promiseArray = [];
    for (let i = 0; i < images.length; i++) {
      const promise = mediaUpload(images[i]);
      promiseArray[i] = promise;
    }
    try {
      let result = await Promise.all(promiseArray);
      if (images.length == 0) {
        result = locationData.state.images;
      }

      const altNameInArray = altName.split(",");
      const product = {
        name: name,
        altName: altNameInArray,
        price: price,
        labeledPrice: labeledPrice,
        description: description,
        stock: stock,
        images: result,
      };
      const token = localStorage.getItem("token");
      await axios.put(
        import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId,
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Product updating failed");
    }
  }

  return (
    <div className="w-full h-full rounded-lg flex justify-center items-center">
      <div className="w-[500px] h-[600px] rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 m-[10px]">
          Edit Product
        </h1>
        <input
          disabled
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
          type="file"
          onChange={(e) => {
            setImages(e.target.files);
          }}
          multiple
          className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
          placeholder="Product Images"
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
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
}
