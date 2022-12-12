import { NavLink } from "react-router-dom";
import { footerLinks } from "../constants";
import { styles } from "../styles";

const Footer = () => (
  <div
    className={`${styles.flexCenter} bg-primary w-full border-t border-t-secondary`}
  >
    <div className={`${styles.boxWidth}`}>
      <footer className="flex justify-between py-[14px]">
        <span className={styles.footerItems}>Copyright © Skincash.ru</span>
        <div className="flex gap-[32px]">
          {footerLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={styles.footerItems}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
