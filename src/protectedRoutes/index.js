import { useProtect } from "../components/context/Context";
import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoutes = ({ children }) => {
  // const navigate = useNavigate();
  const checkAuth = useProtect();
  //console.log(useProtect);
  if (!checkAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};
export default ProtectedRoutes;
