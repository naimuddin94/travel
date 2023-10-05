import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/navbar/Navbar";
import images from "../components/others/SlideImg";
import useAuthInfo from "../hooks/useAuthInfo";

const Layout = () => {
  const { imageIdx } = useAuthInfo();

  return (
    <div
      className="bg-cover h-screen bg-center bg-black/70 bg-blend-multiply"
      style={{ backgroundImage: `url(${images[imageIdx].url})` }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
