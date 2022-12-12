import { styles } from "../styles";
import { authImg } from "../assets";
import { Button } from "../components";
import { useState } from "react";
const Signup = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    addressSite: "",
    message: "",
  });

  const { name, email, addressSite, message } = value;

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setValue({
      name: "",
      email: "",
      addressSite: "",
      message: "",
    });
  };

  return (
    <div className={`${styles.flexCenter} w-full`}>
      <div className={styles.boxWidth}>
        <div className={`min-h-[100vh] flex items-center justify-around`}>
          <img src={authImg} alt="img" className="md:w-[392px]  w-[295px] " />
          <div>
            <h3 className="font-rubik font-medium text-[32px] leading-[40px] text-white mb-[32px]">
              Заявка на подключение
            </h3>
            <form
              className="w-[456px] flex flex-col items-start gap-[32px]"
              onSubmit={(e) => onSubmitEvent(e)}
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={name}
                className={`${styles.inputItem} `}
                onChange={(e) => onChangeHandler(e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={email}
                className={`${styles.inputItem} `}
                onChange={(e) => onChangeHandler(e)}
              />
              <input
                type="text"
                name="addressSite"
                placeholder="Адрес сайта"
                value={addressSite}
                className={`${styles.inputItem} `}
                onChange={(e) => onChangeHandler(e)}
              />
              <textarea
                className={`${styles.inputItem} resize-none h-[104px] py-[16px]`}
                name="message"
                value={message}
                placeholder="Ваши контакты (Телефон, Telegram, WhatsApp...)"
                onChange={(e) => onChangeHandler(e)}
              />
              <Button variant="full" content={"Отправить заявку"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
