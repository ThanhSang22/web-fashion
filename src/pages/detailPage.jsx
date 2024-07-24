import React, { useState } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Item from "../components/item";
import { FcNext } from "react-icons/fc";
import ao from "../images/ao.webp";
import iamge_product1 from "../images/iamge_product1.webp";
import iamge_product2 from "../images/iamge_product2.webp";
import { Button, Input, Toast, useToast } from "@chakra-ui/react";
import products from "../data/products";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-32 space-y-5 mb-10">
        <div className="flex items-center gap-3 my-8">
          <Link to="/" className="hover:text-[#1c5b41]  hover:font-bold">
            Trang chủ
          </Link>
          <span className="text-black">
            <FcNext size={13} />
          </span>
          <Link to="/" className="hover:text-[#1c5b41] hover:font-bold">
            Quần áo
          </Link>
          <FcNext size={13} />
          <p className="text-[#1c5b41] font-bold">Áo len nữ</p>
        </div>
        <div className="flex">
          <div className="w-1/2 mr-10">
            <img src={ao} alt="" className="w-full" />
          </div>
          <div className="text-start w-1/2 flex flex-col gap-5 items-start">
            <h1 className="text-[22px] font-medium">Áo len nữ</h1>
            <p>Mã sp: Đang cập nhật</p>
            <div className="flex gap-5 items-center">
              <p className="text-[28px] text-[#FF6563] font-bold">
                110.000 <u>đ</u>
              </p>
              <p
                className={` text-[20px] font-light line-through text-[#949494]`}
              >
                130.000 <u>đ</u>
              </p>
              <p className="py-1 px-4 bg-[#FF6563] text-[12px] text-white">
                Sale
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img src={iamge_product1} alt="" className="pb-1" />
              <div>
                <h1 className="capitalize font-bold">miễn phí vận chuyển</h1>
                <p className="capitalize">Cho đơn hàng từ 499.000đ</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img src={iamge_product2} alt="" className="pb-1" />
              <div>
                <h1 className="capitalize font-bold">Miễn phí đổi, sửa hàng</h1>
                <p className="capitalize">
                  Đổi hàng trong 30 ngày kể từ ngày mua <br />
                  Hỗ trợ sửa đồ miễn phí
                </p>
              </div>
            </div>
            <p>Số lượng</p>
            <div className="flex">
              <Button
                colorScheme="teal"
                variant="outline"
                className="!text-red-500 !rounded-e-none !border-[#ebebeb]"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
              <Input
                variant="outline"
                value={quantity}
                className="!w-[50px] text-center !rounded-none !border-[#ebebeb] font-medium"
              />
              <Button
                colorScheme="teal"
                variant="outline"
                className="!text-red-500 !rounded-s-none !border-[#ebebeb]"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
            <Button className="w-[75%] !text-[20px] !py-6 !bg-[#1c5b41] !text-white hover:!bg-[#fe9614]">
              Mua ngay
            </Button>
            <Button
              variant="outline"
              className="w-[75%] !text-[20px] !py-6 !border-[#1c5b41] !text-[#1c5b41] hover:!bg-[#fe9614] hover:!text-white hover:!border-none"
              onClick={() =>
                toast({
                  title: `Thêm thành công!`,
                  position: "top",
                  isClosable: true,
                })
              }
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
        <h1 className="font-bold text-[24px] text-start my-10">
          Sản phẩm cùng loại
        </h1>
        <div className="flex justify-between mb-10 gap-5">
          {products.map((product, index) => (
            <Item key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
