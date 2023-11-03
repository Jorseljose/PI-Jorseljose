import { useState } from "react";
import Validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handLeChange = (event) => {
    setErrors(
      Validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handLeSubmit = (event) => {
    event.preventDefault();

    login(userData);
  };

  return (
    <form className={style.form}>
      <div className={style.box}>
        <label className={style.email} htmlFor="email">
          EMAIL:
        </label>
        <input
          className={style.input}
          onChange={handLeChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        <label className={style.password} htmlFor="password">
          PASSWORD
        </label>
        <input
          className={style.input}
          onChange={handLeChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <button className={style.button} onClick={handLeSubmit} type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;
