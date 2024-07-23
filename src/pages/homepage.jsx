import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Header from "../components/header";
import Item from "../components/item";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import banner_new from "../images/banner_new.webp";
import banner_sale from "../images/banner_sale.webp";
import banner_goodprice from "../images/banner_goodprice.webp";
import Footer from "../components/footer";
import products from "../data/products";

const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Thêm thành công!");
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <div className="bg-[#FFFAF0] py-10 xl:px-32 px-16">
        <hr className="w-[100px] border-b-2 border-[#fe9614] mb-5" />
        <div className="md:flex justify-between items-center  gap-4 whitespace-nowrap">
          <h1 className="lg:text-[40px] text-[30px] uppercase font-bold text-[#1c5b41] text-center whitespace-nowrap">
            sản phẩm hot
          </h1>
          <div className="flex items-center gap-3 lg:gap-7 overflow-scroll snap-y snap snap-mandatory">
            <span>
              <TbArrowNarrowLeft className="text-[#1c5b41]" size={25} />
            </span>
            <Button className="!text-white !bg-[#fe9614] !px-2">Quần áo</Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Phụ kiện
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Giày dép
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé gái
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé trai
            </Button>
            <span>
              <TbArrowNarrowRight className="text-[#1c5b41]" size={25} />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-self-end mt-10">
          {products.map((product, index) => (
            <Item key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
        <Button
          colorScheme="teal"
          size="md"
          className="absolute left-[44%] font-bold !text-[18px] mt-10 !py-[20px] !px-[50px] !hover:bg-[#fe9614] !bg-[#1c5b41] !flex !justify-center"
        >
          Xem tất cả
        </Button>
      </div>
      <div className="py-10 xl:px-32 px-16">
        <hr className="w-[100px] border-b-2 border-[#fe9614] mb-5" />
        <div className="md:flex justify-between items-center whitespace-nowrap gap-4">
          <h1 className="lg:text-[40px] text-[30px] uppercase font-bold text-[#1c5b41] text-center">
            hàng mới về
          </h1>
          <div className="flex items-center gap-3 lg:gap-7 overflow-scroll snap-y snap snap-mandatory">
            <span>
              <TbArrowNarrowLeft className="text-[#1c5b41]" size={25} />
            </span>
            <Button className="!text-white !bg-[#fe9614] !px-2">Quần áo</Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Phụ kiện
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Giày dép
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé gái
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé trai
            </Button>
            <span>
              <TbArrowNarrowRight className="text-[#1c5b41]" size={25} />
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-10 gap-6">
          <img
            src={banner_new}
            alt=""
            className="h-auto rounded-[10px] hidden md:flex lg:w-[40%] md:w-[60%]"
          />
          <div className="grid gap-7 grid-cols-2 lg:grid-cols-3 md:gap-4">
            {products.map((product, index) => (
              <Item key={index} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#1c5b41] xl:px-32 px-16">
        <hr className="w-[100px] border-b-2 border-[#fe9614] mb-5" />
        <h1 className="text-[40px] uppercase font-bold text-white text-start pb-6">
          SALE ĐỒNG GIÁ - ĐỪNG LO VỀ GIÁ
        </h1>
        <img src={banner_sale} alt="" className="rounded-[10px] h-auto" />
        <div className="justify-self-end mt-10 gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center">
          {products.map((product, index) => (
            <Item
              key={index}
              product={product}
              addToCart={addToCart}
              className="text-white"
            />
          ))}
        </div>
        <Button
          size="md"
          className="font-bold absolute left-[40%] !text-[18px] mt-10 !py-[20px] !px-[50px] !hover:bg-white hover:text-[#fe9614] !bg-[#fe9614] !text-white"
        >
          Xem tất cả
        </Button>
      </div>
      <div className="py-10 xl:px-32 px-16">
        <hr className="w-[100px] border-b-2 border-[#fe9614] mb-5" />
        <div className="md:flex justify-between items-center  whitespace-nowrap gap-4">
          <h1 className="lg:text-[40px] text-[30px] uppercase font-bold text-[#1c5b41] text-center">
            sản phẩm giá tốt
          </h1>
          <div className="flex items-center gap-3 xl:gap-7 overflow-scroll snap-y snap snap-mandatory">
            <span>
              <TbArrowNarrowLeft className="text-[#1c5b41]" size={25} />
            </span>
            <Button className="!text-white !bg-[#fe9614] !px-2">Quần áo</Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Phụ kiện
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Giày dép
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé gái
            </Button>
            <Button
              variant="ghost"
              className="hover:!bg-[#fe9614] hover:text-white"
            >
              Bé trai
            </Button>
            <span>
              <TbArrowNarrowRight className="text-[#1c5b41]" size={25} />
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-10 gap-6">
          <img
            src={banner_goodprice}
            alt=""
            className="h-auto rounded-[10px] hidden md:flex lg:w-[40%] md:w-[60%]"
          />
          <div className="grid gap-7 grid-cols-2 lg:grid-cols-3 md:gap-4">
            {products.map((product, index) => (
              <Item key={index} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
