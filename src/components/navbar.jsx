import { Select } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#FFFAF0] md:px-32 px-20">
      <div className="hidden lg:flex justify-between items-center text-[#1c5b41]  py-4 whitespace-nowrap gap-2">
        <div className="flex gap-7 font-medium">
          <Link to="/" className="hover:text-orange-400">
            Trang chủ
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Thời trang nam
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Sản phẩm
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Bé trai
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Bé gái
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Tin tức
          </Link>
          <Link to="/" className="hover:text-orange-400">
            Liên hệ
          </Link>
        </div>
        <div className="flex items-center gap-2 font-medium">
          |
          <span className="ml-5">
            <BiPhoneCall size={20} />
          </span>
          Hotline: 19006750
        </div>
      </div>
      <div className="flex lg:hidden py-6">
        <Select className="h-[40px] pl-4 !rounded-e-none !rounded-s-[20px] !bg-white !outline-none">
          <option value="option1">Giày dép</option>
          <option value="option2">Phụ kiện</option>
          <option value="option3">Quần áo</option>
          <option value="option4">Sơ mi dài tay</option>
          <option value="option5">Sơ mi ngắn tay</option>
          <option value="option6">Thời trang nữ</option>
          <option value="option7">Thời trang nam</option>
          <option value="option8">Bé trai</option>
          <option value="option9">Bé gái</option>
          <option value="option10">Tất cả</option>
        </Select>
        <input
          className="h-[40px] !outline-none !bg-white px-4 w-[100vw]"
          placeholder="Tìm sản phẩm bạn cần"
        />
        <button className="!bg-orange-400 !px-4 !rounded-e-[20px] !text-white !font-bold">
          <BiSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
