import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [imageIdx, setImageIdx] = useState(0);

  const authInfo = {
    imageIdx,
    setImageIdx,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
