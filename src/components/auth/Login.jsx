import React,{useState} from "react";
import Style from "./_login.module.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  let [login, setLogin] = useState(true);
  let navigate = useNavigate()
  let close = () => {
    setLogin(false);
    navigate("/")
  };
  return (
    <>
      {login === true?
      (<div className={Style.formComponent}>
        <form>
          <div className={Style.formgroup}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className={Style.formgroup}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className={Style.formgroup}>
            <button className={Style.login}>LOGIN</button>
          </div>
        </form>
        <button className={Style.btn} onClick={close}>
          <div> x</div>
        </button>
      </div>):""}
    </>
  );
};

export default Login;
