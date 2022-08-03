import React from "react";
import { useNavigate } from "react-router-dom";
import { useHandle } from "./context/Context";

export const SignIn = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const userAuthChange = useHandle();

  const handleOnChange = () => {
    if (userName !== "admin" && password !== "admin") {
      alert("404");
      return;
    }
    //alert("check");
    userAuthChange(true);
    navigate("/cart");
  };

  // console.log(isLoggedIn);
  return (
    <div className="signIn">
      <input
        type="text"
        value={userName}
        autoFocus
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={handleOnChange}>
        click
      </button>
    </div>
  );
};

export default SignIn;
