import { Button, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo.webp";
import { PiMapPinFill } from "react-icons/pi";
import { TbClockHour4Filled } from "react-icons/tb";
import { ImPhone } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex space-y-3 justify-between items-center px-32 py-5 bg-[#fe9614]">
        <h1 className="text-white font-bold text-[14px]">
          NHẬP THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI
        </h1>
        <div className="flex relative">
          <Input
            type="text"
            placeholder="Nhập email của bạn"
            className="!bg-white !rounded-e-[0px]"
          />
          <Button className="!bg-black !text-white absolute right-2 !px-5">
            Gửi
          </Button>
        </div>
      </div>
      <div className="bg-black gap-12 py-5 px-32 grid md:grid-cols-2 lg:grid-cols-4">
        <div className="text-[#AEAEAE] space-y-4">
          <img src={logo} alt="" />
          <p className="text-[#fe9614] text-[18px] text-start">
            Shop Thời trang và phụ kiện Alena
          </p>
          <div className="flex items-center gap-2">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<PiMapPinFill size={25} />}
              className="!bg-[#fe9614]"
            />
            <p>
              Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba
              Đình, TP Hà Nội
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<TbClockHour4Filled size={25} />}
              className="!bg-[#fe9614]"
            />
            <p>
              Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến
              Chủ nhật
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<ImPhone size={25} />}
              className="!bg-[#fe9614]"
            />
            <p>Hotline 1900 6750</p>
          </div>
        </div>

        <div className="text-[#AEAEAE] space-y-4 text-start text-[16px]">
          <h1 className="font-bold  text-white">Về chúng tôi</h1>
          <p>Trang chủ</p>
          <p>Liên hệ</p>
          <p>Thời trang Nam</p>
          <p>Sản phẩm</p>
          <p>Bé trai</p>
          <p>Bé gái</p>
          <p>Tin tức</p>
        </div>
        <div className="text-[#AEAEAE] space-y-4 text-start text-[16px]">
          <h1 className="font-bold  text-white">Hỗ trợ khách hàng</h1>
          <p>Trang chủ</p>
          <p>Liên hệ</p>
          <p>Thời trang Nam</p>
          <p>Sản phẩm</p>
          <p>Bé trai</p>
          <p>Bé gái</p>
          <p>Tin tức</p>
        </div>
        <div className="text-[#AEAEAE] space-y-4 text-start text-[16px]">
          <h1 className="font-bold  text-white">Dịch vụ</h1>
          <p>Trang chủ</p>
          <p>Liên hệ</p>
          <p>Thời trang Nam</p>
          <p>Sản phẩm</p>
          <p>Bé trai</p>
          <p>Bé gái</p>
          <p>Tin tức</p>
          <div className="flex gap-4">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaYoutube size={25} />}
              className="!bg-[#fe9614]"
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<AiFillInstagram size={25} />}
              className="!bg-[#fe9614]"
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<TiSocialFacebook size={25} />}
              className="!bg-[#fe9614]"
            />
          </div>
        </div>
      </div>
      <div className="py-2 bg-[#AEAEAE] text-white text-center">
        © Bản quyền thuộc về Cafein Team | Cung cấp bởi Sapo
      </div>
    </div>
  );
};

export default Footer;
