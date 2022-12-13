import { useState, useEffect } from "react";
import { csgo, fire, help, refresh, search, select } from "../assets";
import { styles } from "../styles";
import { csgoSkins, dotaSkins } from "../constants/db";
import { ProductCard } from "../components";
const Pruducts = () => {
  const [game, setGame] = useState("csgo");
  const [priceAndCount, setPriceAndCount] = useState({ price: 0, count: 0 });
  const [rarity, setRarity] = useState([]);
  const [hotprice, setHotprice] = useState(false);

  useEffect(() => {
    setPriceAndCount({
      price: getActiveItemsPrice(game == "csgo" ? csgoSkins : dotaSkins).sum,
      count: getActiveItemsPrice(game == "csgo" ? csgoSkins : dotaSkins).count,
    });
    setRarity(getRarity(game == "csgo" ? csgoSkins : dotaSkins));
  }, [game]);

  const getActiveItemsPrice = (products) => {
    let sum = 0,
      count = 0;
    products.map((item) => {
      if (!item.block) {
        sum += item.pr;
        count++;
      }
    });
    sum = Math.round(10 * sum) / 10;
    return { sum, count };
  };

  const getRarity = (products) => {
    let rarity = [
      { count: 0, color: "#FFCE50", id: 1 },
      { count: 0, color: "#ED422B", id: 2 },
      { count: 0, color: "#CF309C", id: 3 },
      { count: 0, color: "#8533ED", id: 4 },
      { count: 0, color: "#275CE4", id: 5 },
      { count: 0, color: "#6AB2F4", id: 6 },
      { count: 0, color: "#FFFFFF", id: 7 },
    ];
    products.map((item) => {
      switch (item.rarity) {
        case 1:
          rarity[0].count++;

          break;
        case 2:
          rarity[1].count++;

          break;
        case 3:
          rarity[2].count++;

          break;
        case 4:
          rarity[3].count++;

          break;
        case 5:
          rarity[4].count++;

          break;
        case 6:
          rarity[5].count++;

          break;
        case 7:
          rarity[6].count++;

          break;
      }
    });

    return rarity;
  };

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
      <div className={`${styles.flexCenter} bg-primary w-full `}>
        <div className={`${styles.boxWidth} py-[40px]`}>
          <>
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start">
                <h3 className="font-rubik font-medium text-[32px] leading-[40px] text-white mb-[12px]">
                  Выбор предметов для обмена
                </h3>
                <p className="font-rubik font-normal text-[16px] leading-[16px] text-white">
                  Всего{" "}
                  <span className="font-semibold">
                    {priceAndCount.count} предметов
                  </span>{" "}
                  на сумму{" "}
                  <span className="font-semibold">{priceAndCount.price} ₽</span>
                </p>
              </div>
              <div className="h-[48px] w-[380px] relative">
                <label htmlFor="search">
                  <img
                    src={search}
                    alt="search"
                    className="cursor-pointer w-[16px] h-[16px] absolute left-[16px] top-[50%] translate-y-[-50%]"
                  />
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Поиск по названию"
                  className="w-full h-[100%] border border-[#3D4554] rounded-[24px] pl-[48px] pr-[16px] font-rubik font-normal text-white"
                />
              </div>
            </div>
            <div className="flex justify-between mt-[42px] pb-[32px] border-b border-[#3D4554]">
              <div className="flex gap-[24px] items-center">
                <span className="font-rubik font-normal text-[16px] text-white leading-[20px]">
                  Редкость
                </span>
                <div className="flex gap-[16px]">
                  {rarity.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={item.id}
                      className={`font-rubik font-normal text-[14px] leading-[16px] text-dimWhite ${styles.flexCenter} gap-[12px]`}
                    >
                      <input type="checkbox" id={item.id} className="hidden" />
                      <span
                        className={`rarity-checkbox w-[20px] h-[20px] border rounded relative`}
                        style={{ borderColor: item.color }}
                      ></span>
                      {item.count}
                    </label>
                  ))}
                </div>
              </div>
              <div className={`${styles.flexCenter}`}>
                <label
                  id="hotprice-label"
                  htmlFor="hotprice"
                  className="w-[40px] h-[24px] bg-secondary border border-[#3D4554] rounded-[24px] cursor-pointer mr-[12px]"
                >
                  <input
                    type="checkbox"
                    id="hotprice"
                    className="hidden"
                    onChange={(e) => setHotprice(e.target.checked)}
                  />
                  <span className="toggle-icon"></span>
                </label>
                <img
                  src={fire}
                  alt="fire"
                  className="w-[24px] h-[24px] relative top-[-4px]"
                />
                <span className="font-rubik font-normal text-[16px] leading-[20px] text-white mr-[12px] ml-[4px]">
                  Только горячие цены
                </span>
                <img src={help} alt="icon" />
              </div>
            </div>
          </>
          <div>
            <div className="flex justify-between mt-[24px] mb-[40px] items-center">
              <div className={`${styles.flexCenter} gap-[12px] cursor-pointer`}>
                <img src={select} alt="select" className="w-[20px] h-[20px]" />
                <span className="font-rubik font-medium text-[16px] leading-[20px] text-yellow">
                  Выбрать все
                </span>
              </div>
              {/* Bu yerga dropdown qo'yishim kerak */}
              <div className="font-rubik font-normal text-[16px] text-white">
                По цене
              </div>
            </div>
            <div className="flex flex-wrap gap-x-[18px] gap-y-[24px]">
              <ProductCard
                props={{ csgoSkins, dotaSkins }}
                game={game}
                rarity={rarity}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pruducts;
