import { Outlet, Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { LuFlower2 } from "react-icons/lu";

const Layout = () => {
  return (
    <>
      <nav className="Navegation"> 

        <Link to="/"><IoHomeOutline /> Home</Link>
        <Link to="/blogs"><LuFlower2 />Flores</Link>
        <Link to="/contact"><AiOutlineMessage />Contact</Link>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;