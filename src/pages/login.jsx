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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-6">
            <Input
              {...register("email", {
                required: "Vui lòng nhập email.",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email không hợp lệ.",
                },
              })}
              type="email"
              placeholder="Email"
            />
            <p className="text-start text-red-500">{errors.email?.message}</p>
            <Input
              {...register("password", {
                required: "Vui lòng nhập password.",
                pattern: {
                  message: "Mật khẩu không hợp lệ, nhập lại đi shop ơi",
                },
              })}
              type="password"
              placeholder="Mật khẩu"
            />
            <p className="text-start text-red-500">
              {errors.password?.message}
            </p>
            <Button
              type="submit"
              className="w-full !mt-7 !text-[16px] !rounded-[12px] !font-normal !py-6 !bg-[#1c5b41] !text-white hover:!bg-[#fe9614]"
            >
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
