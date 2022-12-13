import { useEffect } from "react";
import { useState } from "react";
import { cardFire, lock, closeDark } from "../assets";
import { styles } from "../styles";

const ProductCard = (props) => {
  const { csgoSkins, dotaSkins } = props.props;
  const [gameItems, setGameItems] = useState([]);

  useEffect(() => {
    setGameItems(props.game == "csgo" ? csgoSkins : dotaSkins);
  }, [props.game]);

  return gameItems.map((item) => (
    <div
      key={item.id}
      className={`${
        styles.flexCenter
      } flex-col basis-[120px] min-h-[132px] px-[16px] py-[12px]  rounded-[16px] cursor-pointer relative overflow-hidden ${
        !item.block
          ? "bg-secondary"
          : "bg-transparent border border-dashed border-[#3D4554]"
      }`}
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-[88px] h-[66px] object-contain mb-[16px]"
      />
      <div className={`${styles.flexCenter}`}>
        <span
          className={`w-full font-rubik font-medium text-[14px] leading-[16px] text-center  ${
            item.bestPrice ? "text-[#F47523]" : "text-white"
          }`}
        >
          {item.price}
        </span>
        {item.bestPrice ? (
          <img
            src={cardFire}
            alt="fire"
            className="w-[16px] h-[16px] relative top-[-2px]"
          />
        ) : (
          ""
        )}
      </div>
      {item.block ? (
        <div className={`${styles.flexCenter} mt-[5px] gap-[8px]`}>
          <img src={lock} alt="lock" />
          <span className="font-rubik font-normal text-[12px] leading-[14px] text-dimWhite">
            {item.time}
          </span>
        </div>
      ) : (
        ""
      )}
      <div
        className="w-[48px] h-[48px] opacity-[.4] blur-[16px] absolute bottom-[-32px] "
        style={{ background: props.rarity[item.rarity - 1].color }}
      ></div>
      <div
        className="w-[24px] h-[4px] absolute bottom-0 rounded-t z-[10]"
        style={{ background: props.rarity[item.rarity - 1].color }}
      ></div>
      {/* Selecting */}
      <div className="absolute w-full h-full rounded-[16px] border-2 border-yellow z-[5] bg-[#EFBC3A1A]">
        <div
          className={`${styles.flexCenter} w-[24px] h-[24px] rounded-full bg-white bottom-0`}
        >
          <img src={closeDark} alt="close" />
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
