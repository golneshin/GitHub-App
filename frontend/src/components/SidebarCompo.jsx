import { Link } from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { SiGnuprivacyguard } from "react-icons/si";
import LogoutCompo from "./LogoutCompo";
import { useAuthContext } from "../context/authContext";

const SidebarCompo = () => {
  const {authUser} = useAuthContext();

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky 
      top-0 left-0 h-screen py-8 overflow-y-auto border-r
      bg-glass text-white">
      <nav className="h-full flex flex-col gap-3">
        {/* logo */}
        <Link 
          to='/' 
          className="flex justify-center">
          <img className="h-8" src="/github.svg" alt="GitHub Logo"/>
        </Link>
        {/* home */}
        <Link 
          to='/' 
          className="p-1.5 flex justify-center transition-colors 
            duration-200 rounded-lg  hover:bg-gray-800">
          <IoHomeSharp size={20}/>
        </Link>
        {/* likes */}
        {authUser && (
          <Link 
            to='/likes' 
            className="p-1.5 flex justify-center transition-colors 
              duration-200 rounded-lg  hover:bg-gray-800">
            <FaHeart size={20}/>
          </Link>
        )} 
        {/* explore */}
        {authUser && (
          <Link 
            to='/explore' 
            className="p-1.5 flex justify-center transition-colors duration-200 
              rounded-lg  hover:bg-gray-800">
            <MdOutlineExplore size={22}/>
          </Link>
        )} 
        {/* logout */}
        {authUser && (
          <Link 
            to='/signup' 
            className="p-1.5 flex flex-col gap-2 mt-auto justify-center 
              transition-colors duration-200 rounded-lg  hover:bg-gray-800">
            <LogoutCompo />
          </Link>
        )} 
        {/* login */}
        {!authUser && (
          <Link 
            to='/login' 
            className="p-1.5 flex justify-center transition-colors 
              duration-200 rounded-lg  hover:bg-gray-800">
            <LuLogIn size={20}/>
          </Link>
        )}
        {/* signup */}
        {!authUser && (
          <Link 
            to='/signup' 
            className="p-1.5 flex justify-center transition-colors 
              duration-200 rounded-lg  hover:bg-gray-800">
            <SiGnuprivacyguard size={20}/>
          </Link>
        )}  
      </nav>
    </aside>
  )
}

export default SidebarCompo;
