import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

const CustomInput = ({
  name,
  setName,
  type,
  value,
  placeholder,
  showPassWord,
  register,
  errors,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <div className="mt-2 relative">
        <Input
          type={type || (!showPass ? "password" : "text")}
          onChange={onChange || ((e) => setName(e.target.value))}
          value={value}
          {...register}
          placeholder={placeholder}
          name={name}
        />
        {/* <input
          id={id}
          autoComplete="current-password"
          className={classNames(
            `block w-full h-[60px] rounded-[10px] border-0 py-1.5 px-14 text-gray-900 shadow-sm 
          ring-1 ring-inset ring-gray-300 placeholder:text-[#8E8E8E] focus:ring-2 focus:ring-inset 
          focus:ring-indigo-600 sm:text-xl sm:leading-6 focus:outline-none ${className}`,
            { "focus:right-1 focus:ring-inset focus:ring-red-400": errors }
          )}
        /> */}
        {showPassWord &&
          (showPass ? (
            <span
              className="inline-block absolute top-5 right-4 text-xl font-medium text-[#4D648D]"
              onClick={() => setShowPass(!showPass)}
            >
              <BsEye />
            </span>
          ) : (
            <span
              className="inline-block absolute top-5 right-4 text-xl font-medium text-[#4D648D]"
              onClick={() => setShowPass(!showPass)}
            >
              <BsEyeSlash />
            </span>
          ))}

        <p className="text-[#E41212] text-sm font-medium mt-1 ml-2 text-start">
          {errors}
        </p>
      </div>
    </div>
  );
};

export default CustomInput;
