import React from "react";
import slider from "../images/slider.webp";
import service1 from "../images/image_service1.webp";
import service2 from "../images/image_service2.webp";
import service3 from "../images/image_service3.webp";
import service4 from "../images/image_service4.webp";

const Slider = () => {
  return (
    <div>
      <img src={slider} alt="" />
      <div className="bg-[#fe9614] flex items-center justify-between px-32 py-5 gap-4">
        <div className="text-white flex-col flex items-center">
          <img src={service1} alt="" className="pb-1" />
          <h1 className="uppercase text-[14px] font-medium">
            miễn phí giao hàng
          </h1>
          <p className="capitalize text-[12px]">
            miễn phí ship với đơn hàng &gt; 498K
          </p>
        </div>
        <div className="text-white flex-col flex items-center">
          <img src={service2} alt="" className="pb-1" />
          <h1 className="uppercase text-[14px] font-medium">thanh toán COD</h1>
          <p className="capitalize text-[12px]">
            thanh toán khi nhận hàng (COD)
          </p>
        </div>
        <div className="text-white flex-col flex items-center">
          <img src={service3} alt="" className="pb-1" />
          <h1 className="uppercase text-[14px] font-medium">khách hàng VIP</h1>
          <p className="capitalize text-[12px]">
            ưu đãi dành cho khách hàng VIP
          </p>
        </div>
        <div className="text-white flex-col flex items-center">
          <img src={service4} alt="" className="pb-1" />
          <h1 className="uppercase text-[14px] font-medium">hỗ trợ bảo hành</h1>
          <p className="capitalize text-[12px]">đổi, sửa đồ tại tất cả store</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
