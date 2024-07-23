import React, { useState } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FcNext } from "react-icons/fc";
import aoBe from "../images/aoBe.webp";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Header />
      <Navbar />
      <div className="py-[40px] px-32">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="hover:text-[#1c5b41]  hover:font-bold">
            Trang chủ
          </Link>
          <span className="text-black">
            <FcNext size={13} />
          </span>
          <p className="text-[#1c5b41] font-bold">Giỏ hàng</p>
        </div>
        <div className="flex justify-between border-[1.5px] border-[#1c5b41] p-2 rounded-t-lg">
          <h1 className="font-bold text-black w-1/2">Thông tin sản phẩm</h1>
          <h1 className="font-bold text-black w-[10%]">Đơn giá</h1>
          <h1 className="font-bold text-black w-[10%]">Số lượng</h1>
          <h1 className="font-bold text-black w-[10%]">Thành tiền</h1>
        </div>
        <div className="border-[1.5px] border-[#1c5b41] p-2 rounded-b-lg border-t-0 space-y-2">
          <Box mb="4" className="flex items-center justify-between mt-3">
            <div className="flex gap-5 items-start w-1/2">
              <img src={aoBe} alt="" width={80} />
              <div>
                <Text>Bộ sơ mi cotton bé trai</Text>
                <Button
                  colorScheme="teal"
                  variant="link"
                  className="!font-light !text-gray-400"
                >
                  Xóa
                </Button>
              </div>
            </div>
            <div className="w-[10%] ">
              <h1 className="text-[16px] text-[#fe9614] font-bold">
                200.000 <u>đ</u>
              </h1>
              <p
                className={`text-[16px] font-light line-through text-[#acacac]`}
              >
                250.000 <u>đ</u>
              </p>
            </div>
            <div className="flex w-[10%]">
              <Button
                colorScheme="teal"
                variant="outline"
                className="!text-black !rounded-e-none !border-[#ebebeb]"
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
                className="!text-black !rounded-s-none !border-[#ebebeb]"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
            <Text className="text-[16px] text-[#fe9614] font-bold w-[10%]">
              200.000 <u>đ</u>
            </Text>
          </Box>
          {cartItems.length === 0 ? (
            <Text>Giỏ hàng trống</Text>
          ) : (
            cartItems.map((item, index) => (
              <Box
                key={index}
                mb="4"
                className="flex items-center justify-between "
              >
                <img src={item.image} alt="" width={80} />
                <div className="flex flex-col justify-start items-start">
                  <Text>{item.name}</Text>
                  <p
                    onClick={() => removeFromCart(index)}
                    className="font-light text-gray-400"
                  >
                    Xóa
                  </p>
                </div>
                <div className="w-[10%]">
                  <Text className="text-[16px] text-[#fe9614] font-bold">
                    {item.price}.000 <u>đ</u>
                  </Text>
                  <p
                    className={`text-[16px] font-light line-through text-[#acacac]`}
                  >
                    250.000 <u>đ</u>
                  </p>
                </div>
                <div className="flex w-[10%]">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    className="!text-black !rounded-e-none !border-[#ebebeb]"
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
                    className="!text-black !rounded-s-none !border-[#ebebeb]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Text className="text-[16px] text-[#fe9614] font-bold">
                  {item.price}.000 đ
                </Text>
              </Box>
            ))
          )}
        </div>
        <div className="mt-6 flex flex-col justify-end items-end">
          <div className="flex w-[30%] justify-between">
            <p className="">Tổng tiền:</p>
            <Text className="text-[16px] text-[#fe9614] font-bold">
              200.000 đ
            </Text>
          </div>
          <Link to="/pay" className="w-[30%]">
            <Button className="w-full mt-6 !font-normal !py-6 !bg-[#1c5b41] !text-white hover:!bg-[#fe9614] !rounded-[12px]">
              Thanh toán
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default CartPage;
