import React from "react";
import { useHandle } from "../components/context/Context";
import { Navigate } from "react-router-dom";
export const SignOutRoute = () => {
  //   const navigate = useNavigate();
  const userAuthChange = useHandle();

  //console.log(userAuthChange + "1");
  userAuthChange(false);
  // console.log(useProtect);

  return <Navigate to={"/"} />;
};
export default SignOutRoute;
