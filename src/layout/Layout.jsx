import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-[url('/images/rectangle1.png')] bg-cover h-screen bg-center bg-black/70 bg-blend-multiply">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
