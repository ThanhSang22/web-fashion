import React from "react";
import ao from "../images/ao.webp";
import { PiHandbag } from "react-icons/pi";
import { Link } from "react-router-dom";

const Item = ({ className, addToCart, product }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="relative group/item">
        <Link to="/item">
          <img src={ao} alt="" className="rounded-[10px]" />
        </Link>
        <div
          onClick={() => addToCart(product)}
          className="group/edit group-hover/item:visible invisible rounded-b-[10px] py-1 w-full !hover:bg-[#fe9614] group-hover/item:bg-slate-400 flex items-center gap-1 justify-center text-white absolute bottom-0 cursor-pointer"
        >
          <PiHandbag /> Thêm vào giỏ hàng
        </div>
      </div>

      <p className={`${className} font-medium text-[14px]`}>Áo len nữ</p>
      <div className="flex gap-3 whitespace-nowrap">
        <p className="text-[16px] text-[#fe9614] font-medium">
          {product.price}
          .000 <u>đ</u>
        </p>
        <p className={`${className} text-[16px] font-light line-through`}>
          130.000 <u>đ</u>
        </p>
      </div>
    </div>
  );
};

export default Item;
