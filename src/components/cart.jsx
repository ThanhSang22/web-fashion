import React, { useState } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

const Cart = ({ cartItems, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box borderWidth="1px" borderRadius="lg" p="6">
      <Header />
      <Navbar />
      <Text fontSize="2xl" mb="4">
        Giỏ hàng
      </Text>
      {cartItems.length === 0 ? (
        <Text>Giỏ hàng trống</Text>
      ) : (
        cartItems.map((item, index) => (
          <Box key={index} mb="4" className="flex items-center justify-between">
            <img src={item.image} alt="" width={80} />
            <div>
              <Text>{item.name}</Text>
              <Button
                onClick={() => removeFromCart(index)}
                colorScheme="teal"
                variant="link"
                className="!font-light !text-gray-400"
              >
                Xóa
              </Button>
            </div>

            <Text className="text-[16px] text-[#fe9614] font-medium">
              {item.price}.000 đ
            </Text>
            <div className="flex">
              <Button
                colorScheme="teal"
                variant="outline"
                className="!text-black !rounded-e-none !border-[#ebebeb]"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
              <Input
                variant="outline"
                value={quantity}
                className="!w-[50px] text-center !rounded-none !border-[#ebebeb] font-medium"
              />
              <Button
                colorScheme="teal"
                variant="outline"
                className="!text-black !rounded-s-none !border-[#ebebeb]"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
            <Text className="text-[16px] text-[#fe9614] font-medium">
              {item.price}.000 đ
            </Text>
          </Box>
        ))
      )}
      {/* <Box p="6">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="8">
          {products.map((product, index) => (
            <Item key={index} product={product} addToCart={addToCart} />
          ))}
        </SimpleGrid>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </Box> */}
      <Footer />
    </Box>
  );
};

export default Cart;
