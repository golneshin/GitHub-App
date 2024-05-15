import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"
import SidebarCompo from "./components/SidebarCompo"

function App() {

  return (
    <div className='flex'>
      <SidebarCompo/>
      <div 
        className="max-w-5xl my-5 mx-auto text-white 
        transition-all duration-300 flex-1"
        >
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/Likes" element={<LikesPage/>} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
