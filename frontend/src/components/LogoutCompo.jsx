import { MdLogout } from "react-icons/md";
// TODO: implement logout functionality

const LogoutCompo = () => {
  return (
    <>
      <img 
        src="/profile2.jpg"
        className="w-10 h-10 rounded-full border border-gray-800"
      />
      <div className="cursor-pointer flex items-center p-2 
        rounded-lg mt-auto bg-glass border border-gray-500">
        < MdLogout size={22}/>
      </div>
    </>
  )
};

export default LogoutCompo;
