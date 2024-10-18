import { Outlet, Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { MdContentPaste } from "react-icons/md";

const Layout = () => {
  return (
    <>
      <nav className="Navegation"> 

        <Link to="/"><IoHomeOutline /> Home</Link>
        <Link to="/blogs"><MdContentPaste />Content</Link>
        <Link to="/contact"><AiOutlineMessage />Contact</Link>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;