import { styles } from "../styles";
import { arrowDown, flagRu, logo } from "../assets";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  // const [showSignup, setShowSignup] = useState(false);
  return (
    <div
      className={`${styles.flexCenter} bg-primary w-full border-b border-b-secondary`}
    >
      <div className={styles.boxWidth}>
        <nav className="flex py-[16px] justify-between">
          <div className="flex items-center md:gap-[140px] gap-[54px]">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" className="w-[173px] h-[40px]" />
            </NavLink>
            <div className="flex md:gap-[32px] gap-[24px]">
              {navLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="font-rubik font-medium text-[14px] leading-[16px] text-white"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div
              className={`${styles.flexCenter} cursor-pointer py-[12px] pl-[12px] pr-[16px] border border-[#3D4554] rounded-[20px]`}
            >
              <img src={flagRu} alt="flag-ru" />
              <span className="block pl-[8px] pr-[16px] font-rubik font-normal text-[14px] leading-[16px] text-white">
                RU
              </span>
              <img src={arrowDown} alt="arrow-down" />
            </div>
            <button className="font-rubik font-medium text-[16px] leading-[20px] text-primary py-[10px] px-[24px] bg-yellow rounded-[48px]">
              Войти
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
