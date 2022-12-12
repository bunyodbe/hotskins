import React from "react";
import { styles } from "../styles";

const Button = ({ variant, content, icon }) => (
  <button
    className={`py-[14px] px-[24px] rounded-[48px] font-rubik font-medium text-[16px] leading-[20px] gap-[12px] ${
      styles.flexCenter
    } ${
      variant == "full"
        ? "bg-yellow text-primary"
        : "bg-transparent border border-yellow text-yellow"
    }`}
  >
    {icon ? <img src={icon} alt="icon" /> : ""}
    {content}
  </button>
);

export default Button;
