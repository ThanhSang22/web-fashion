import React, { useState } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FcNext } from "react-icons/fc";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div>
      <Header />
      <Navbar />
      <div className="md:mx-32 mx-20">
        <div className="flex items-center gap-3 my-8">
          <p className="hover:text-[#1c5b41]  hover:font-bold">Trang chủ</p>
          <span className="text-black">
            <FcNext size={13} />
          </span>
          <p className="text-[#1c5b41] font-bold">Đăng nhập tài khoản</p>
        </div>
        <div className="md:w-[400px] w-full p-5 bg-[#fff] shadow-md m-auto text-center space-y-6 my-10">
          <div>
            <h1 className="uppercase text-[30px] font-light">đăng nhập</h1>
            <p>
              Nếu bạn chưa có tài khoản,{" "}
              <a href="/signup" className="text-[#1c5b41] font-bold">
                {" "}
                đăng ký tại đây
              </a>
            </p>
          </div>
          <form action="submit" className="space-y-4 mt-6">
            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {isError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isError}>
              <FormLabel>Mật khẩu</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Mật khẩu" />
            <Button className="w-full !text-[16px] !rounded-[12px] !font-normal !py-6 !bg-[#1c5b41] !text-white hover:!bg-[#fe9614]">
              Đăng nhập
            </Button>
          </form>
          <div className="space-y-2">
            <p>Quên mật khẩu</p>
            <p>Hoặc đăng nhập bằng</p>
          </div>
          <div className="space-y-2">
            <Button
              leftIcon={<FaFacebookF />}
              variant="solid"
              className="!bg-blue-800 !text-white"
            >
              Facebook
            </Button>
            <Button
              leftIcon={<FaGooglePlusG size={20} />}
              variant="solid"
              className="!bg-red-500 !text-white !flex items-center m-auto"
            >
              Google
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;