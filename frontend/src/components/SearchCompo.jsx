import { IoSearch } from "react-icons/io5";

const SearchCompo = () => {
  return (
    <form className=" max-w-xl mx-auto p-2 sm:w-82">
      <label 
        htmlFor="default-search" 
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
        Search
      </label>
      <div className=" relative ">
        <input
          type="search"
          id="deafault-search"
          className=" block w-full p-4 ps-10 text-sm rounded-lg bg-glass
           focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent"
          placeholder="i.e. johndoe"
          required
        />
        <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch className=" w-5 h-5 "/>
        </div>
        <button 
          type="submit" 
          className=" text-white absolute end-2.5 bottom-2.5  bg-gradient-to-r from-cyan-500 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 
          dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2"
          >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchCompo;
