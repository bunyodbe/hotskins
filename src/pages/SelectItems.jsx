import { useState } from "react";
import { csgo, refresh } from "../assets";
import { styles } from "../styles";

const SelectItems = () => {
  const [game, setGame] = useState("dota");
  return (
    <>
      <div className={`${styles.flexCenter} bg-secondary w-full `}>
        <div className={styles.boxWidth}>
          <div className="pt-[48px] pb-[32px]">
            <h2 className={`${styles.heading2} text-white mb-[8px]`}>
              Пополнение счёта
            </h2>
            <div className="flex mb-[40px]">
              <span className="font-rubik fontnormal text-[16px] leading-[22px] text-dimWhite">
                Tastygo.gg
              </span>
              <span className="pl-[16px] ml-[16px] border-l border-l-[#3D4554] font-rubik fontnormal text-[16px] leading-[22px] text-dimWhite">
                Депозит № 87644632
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex ">
                <div
                  className={`flex items-center py-[16px] px-[16px] w-[196px] border border-[#3D4554] rounded-l-[16px] cursor-pointer ${
                    game == "csgo"
                      ? "border-r-2 border-2 border-yellow bg-[#EFBC3A1A]"
                      : "border-r-0"
                  }`}
                  onClick={() => setGame("csgo")}
                >
                  <img src={csgo} alt="csgo" className="w-[40px] h-[40px]" />
                  <span className="font-rubik font-medium text-[18px] leading-[24px] text-white ml-[16px]">
                    CS:GO
                  </span>
                </div>
                <div
                  className={`flex items-center py-[16px] px-[16px] w-[196px] border border-[#3D4554] rounded-r-[16px] cursor-pointer ${
                    game == "dota"
                      ? "border-2 border-l-2 border-yellow bg-[#EFBC3A1A]"
                      : "border-l-0"
                  }`}
                  onClick={() => setGame("dota")}
                >
                  <img src={csgo} alt="csgo" className="w-[40px] h-[40px]" />
                  <span className="font-rubik font-medium text-[18px] leading-[24px] text-white ml-[16px]">
                    DOTA 2
                  </span>
                </div>
              </div>
              <div className={`${styles.flexCenter} gap-[12px] cursor-pointer`}>
                <img src={refresh} alt="icon" className="w-[20px] h-[20px]" />
                <span className="font-rubik font-medium text-[16px] leading-[20px] text-white">
                  Обновить инвентарь
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-secondary w-full `}>
        <div className={styles.boxWidth}></div>
      </div>
    </>
  );
};

export default SelectItems;
