import React, { useState } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import banner_collection from "../images/banner_collection.webp";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import products from "../data/products";
import Item from "../components/item";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header />
      <Navbar />
      <img src={banner_collection} alt="" />
      <div className="py-10 xl:px-32 px-16">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="hover:text-[#1c5b41]  hover:font-bold">
            Trang chủ
          </Link>
          <span className="text-black">
            <FcNext size={13} />
          </span>
          <p className="text-[#1c5b41] font-bold">Quần áo</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-self-end mt-10">
          {products.map((product, index) => (
            <Item key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
