import React, { useEffect, useState } from "react";
import logo from "../images/logo.webp";
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  Select,
} from "@chakra-ui/react";
import { MdAccountCircle, MdKeyboardArrowLeft } from "react-icons/md";
import { FaMoneyBill1 } from "react-icons/fa6";
import aoBe from "../images/aoBe.webp";
import { Link } from "react-router-dom";
import axios from "axios";

const PayPage = () => {
  const [province, setProvince] = useState();
  // useEffect(() => {
  //   axios.get("https://vapi.vnappmob.com/api/province").then((response) => {
  //     setProvince(response.data);
  //     console.log(province);
  //   });
  // }, [province]);
  // const [data, setData] = useState(null);

  return (
    <div className="flex gap-10 pl-12 justify-around">
      <div className="w-[60%]">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="bg-[#1c5b41] p-2 rounded-3xl mt-2"
          />
        </Link>
        <div className="flex gap-10 mt-3">
          <div className="space-y-2 w-[50%]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[20px]">Thông tin nhận hàng</h1>
              <a
                href="/login"
                className="text-[#2a9dcc] flex items-center gap-1 "
              >
                <MdAccountCircle /> Đăng nhập
              </a>
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Email
              </label>
              <Input
                type="email"
                value="admin@gmail.com"
                className=" !outline-none"
              />
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Họ và tên
              </label>
              <Input type="email" className=" !outline-none" />
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Số điện thoại
              </label>
              <InputGroup size="md">
                <Input pr="4.5rem" placeholder="Enter password" />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Địa chỉ
              </label>
              <Input type="email" className=" !outline-none" />
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Tỉnh thành
              </label>
              <Select
                placeholder="---"
                value={province}
                onChange={(e) => setProvince(e.value)}
              >
                {/* {province.map((p, i) => (
                  <option key={i}>{p.province_name}</option>
                ))} */}
              </Select>
              <Input className=" !outline-none" />
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Quận huyện
              </label>
              <Input type="email" className=" !outline-none" />
            </div>
            <div className="flex-col flex space-y-1">
              <label for="email" className="text-gray-500 text-[16px]">
                Phường xã
              </label>
              <Input className=" !outline-none" />
            </div>
            <textarea
              className="w-full border-[1px] border-[#cecdcd] rounded-md px-4 py-2"
              placeholder="Ghi chú (tùy chọn)"
            />
          </div>
          <div className="w-[45%] space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-[20px]">Vận chuyển</h1>
              <div className="flex items-center justify-between border-[1px] border-[#cecdcd] rounded-md p-2 gap-8">
                <Radio value="1">Giao hàng tận nơi</Radio>
                <p>40.000 đ</p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-[20px]">Thanh toán</h1>
              <div className="flex items-center justify-between border-[1px] border-[#cecdcd] rounded-md p-2 gap-8">
                <Radio value="1"> Thanh toán khi giao hàng (COD)</Radio>
                <FaMoneyBill1 className="text-[#1990c6]" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] border-l-[1px] border-[#cecdcd] w-[35%] pr-12 h-[100vh]">
        <h1 className="text-[20px] font-bold py-4 pl-5 border-b-[1px] border-[#cecdcd]">
          Đơn hàng (2 sản phẩm)
        </h1>
        <div className="mt-2 flex justify-between items-center border-b-[1px] border-[#cecdcd] pb-5 ml-5">
          <div className="flex gap-2">
            <img src={aoBe} alt="" className="w-14 rounded-2xl" />
            <p>Bộ sơ mi cotton bé trai</p>
          </div>
          <p className="text-gray-400 text-[14px]">200.000 đ</p>
        </div>
        <div className="mt-5 flex justify-between items-center border-b-[1px] border-[#cecdcd] pb-5 ml-5 gap-4">
          <Input placeholder="Nhập mã giảm giá" />
          <Button className="!bg-[#2a9dcc] !text-white">Áp dụng</Button>
        </div>
        <div className="mt-7 border-b-[1px] border-[#cecdcd] pb-5 ml-5 gap-4 space-y-3">
          <div className="flex gap-5 justify-between">
            <p>Tạm tính</p>
            <p>200.000 đ</p>
          </div>
          <div className="flex gap-5 justify-between">
            <p>Phí vận chuyển</p>
            <p>40.000 đ</p>
          </div>
        </div>
        <div className="mt-2 ml-5 space-y-4">
          <div className="flex gap-6 justify-between">
            <h1 className="text-[20px]">Tổng cộng</h1>
            <p className="text-[20px] text-[#1990c6] font-medium">240.000 đ</p>
          </div>
          <div className="flex gap-6 justify-between">
            <Link to="/cart" className="flex items-center text-[#1990c6]">
              <MdKeyboardArrowLeft /> Quay về giỏ hàng
            </Link>
            <Button className="!bg-[#1990c6] !text-white uppercase">
              Đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
