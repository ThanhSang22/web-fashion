import { Button } from "@chakra-ui/react";
import React from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const Tab = () => {
  return (
    <div className="flex items-center gap-8 overflow-scroll snap-y snap snap-mandatory">
      <TbArrowNarrowLeft className="text-[#1c5b41]" />
      <Button
        colorScheme="teal"
        size="md"
        className="text-white !bg-[#fe9614] !px-2"
      >
        Quần áo
      </Button>
      <p>Phụ kiện</p>
      <p>Giầy dép</p>
      <p>Bé gái </p>
      <p>Bé trai</p>
      <TbArrowNarrowRight className="text-[#1c5b41]" />
    </div>
  );
};

export default Tab;
