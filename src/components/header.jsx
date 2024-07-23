import React from "react";
import logo from "../images/logo.webp";
import {
  Breadcrumb,
  BreadcrumbItem,
  IconButton,
  Select,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { LuBaggageClaim } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-between items-center bg-[#1c5b41] py-5 md:px-32 px-20 gap-4">
      <img src={logo} alt="" />
      <div className="hidden lg:flex">
        <Select
          // value="option10"
          className="h-[40px] !w-[150px] pl-4 !rounded-e-none !rounded-s-[20px] !bg-white !outline-none"
        >
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
          className="h-[40px] !outline-none !bg-white px-4"
          placeholder="Tìm sản phẩm bạn cần"
        />
        <button className="!bg-orange-400 !px-4 !rounded-e-[20px] !text-white !font-bold">
          <BiSearch size={25} />
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex text-white gap-4 items-center whitespace-nowrap">
          <FaUser />
          <Breadcrumb className="hidden lg:flex ">
            <BreadcrumbItem>
              <Link
                className="hover:text-orange-400 hover:no-underline	"
                to="/login"
              >
                Đăng nhập
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                className="hover:text-orange-400 hover:no-underline	"
                to="/signup"
              >
                Đăng ký
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          |
          <Link to="/cart">
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<LuBaggageClaim />}
            />
          </Link>
          {/* <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton> */}
        </div>
        <CgMenuRight
          onClick={onOpen}
          size={25}
          className="cursor-pointer text-orange-400 lg:hidden"
        />
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          className="!bg-[0_0_0_0,8] !block"
        >
          <DrawerOverlay />
          <DrawerContent className="!bg-[#1c5b41] !text-white">
            <DrawerBody className="!flex-col space-y-5 !flex">
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
