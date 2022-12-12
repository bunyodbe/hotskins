import { authLogo, close, eye } from "../assets";
import { styles } from "../styles";
import { Button } from "./";
import { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const { email, password } = value;

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    setValue({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className={`${styles.flexCenter} absolute  w-full top-0 bottom-0 right-0 left-0 bg-primary z-[20] hidden`}
    >
      <div className="flex flex-col items-center ">
        <img src={authLogo} alt="img" />
        <form
          className="flex flex-col  w-[296px] gap-[32px] mt-[56px]"
          onSubmit={(e) => onSubmitEvent(e)}
        >
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={email}
            className={`${styles.inputItem} `}
            onChange={(e) => onChangeHandler(e)}
          />

          <div className="relative w-full max-h-fit">
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Пароль"
              value={password}
              className={`${styles.inputItem} pr-[50px]`}
              onChange={(e) => onChangeHandler(e)}
            />
            <img
              src={eye}
              alt="icon"
              className="absolute w-[20px] h-[20px] cursor-pointer top-[50%] right-[24px] translate-y-[-50%]"
              onClick={() => setShowPass((prev) => !prev)}
            />
          </div>
          <Button variant="full" content="Войти" />
        </form>
      </div>
      <div
        className={`${styles.flexCenter} w-[32px] h-[32px] rounded-full bg-[#272E3B] cursor-pointer absolute top-[16px] right-[16px]`}
      >
        <img src={close} alt="close" />
      </div>
    </div>
  );
};

export default Login;
