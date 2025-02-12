import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FcNext } from "react-icons/fc";
import { Button, Input } from "@chakra-ui/react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    toast("Đăng ký thành công!");
    navigate("/login");
  };
  return (
    <div>
      <Header />
      <Navbar />
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="mx-32">
        <div className="flex items-center gap-3 my-8">
          <p className="hover:text-[#1c5b41]  hover:font-bold">Trang chủ</p>
          <span className="text-black">
            <FcNext size={13} />
          </span>
          <p className="text-[#1c5b41] font-bold">Đăng ký tài khoản</p>
        </div>
        <div className="w-[400px] p-5 bg-[#fff] shadow-md m-auto text-center space-y-6 my-10">
          <div>
            <h1 className="uppercase text-[30px] font-light">đăng nhập</h1>
            <p>
              Đã có tài khoản,{" "}
              <a href="/login" className="text-[#1c5b41] font-bold">
                {" "}
                đăng nhập tại đây
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-6">
            <Input
              {...register("name", {
                required: "Vui lòng nhập tên.",
                pattern: {
                  message: "Tên không hợp lệ",
                  maxLength: 3,
                },
              })}
              type="name"
              placeholder="Tên"
            />
            <p className="text-start text-red-500">{errors.name?.message}</p>
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
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại.",
                pattern: {
                  message: "Số điện thoại không hợp lệ",
                },
              })}
              type="phone"
              placeholder="Số điện thoại"
            />
            <p className="text-start text-red-500">{errors.phone?.message}</p>
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
              className="!mt-7 w-full !text-[16px] !rounded-[12px] !font-normal !py-6 !bg-[#1c5b41] !text-white hover:!bg-[#fe9614]"
            >
              Đăng ký
            </Button>
          </form>
          <div className="space-y-2">
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

export default Signup;
