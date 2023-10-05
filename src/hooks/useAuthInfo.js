import { useContext } from "react";
import { AuthContext } from "../context/Provider";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
