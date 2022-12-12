import { styles } from "../styles";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div className={`${styles.flexCenter} bg-primary w-full `}>
    <div className={`${styles.flexCenter} max-w-[1440px] w-full home`}>
      <div className={styles.boxWidth}>
        <section className={`${styles.homePadding} flex flex-col items-start`}>
          <h1 className={`${styles.heading1} text-white mb-[40px]`}>
            Принимайте платежи <br /> от пользователей <br /> с помощью скинов{" "}
            <br />
            CS:GO и DOTA 2
          </h1>
          <NavLink
            to={"/signup"}
            className="font-rubik font-medium text-[16px] leading-[20px] text-primary bg-yellow rounded-[48px] py-[14px] px-[40px]"
          >
            Подключить проект
          </NavLink>
        </section>
      </div>
    </div>
  </div>
);

export default Home;
