import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="bg-glass rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-lg font-bold md:text-2xl text-center">
            Login To Your Account.
          </h1>
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 
              focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg 
              flex gap-2 p-2 items-center w-full text-center justify-center"
            >
            <FaGithub className="w-5 h-5"/>
            Login With GitHub
          </button>
          <p className=" text-sm font-light text-gray-500">
            Don't have an account?{" "}
            <Link 
              to='/signup' 
              className="font-medium text-primary-600 hover:underline text-blue-600"
              >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
