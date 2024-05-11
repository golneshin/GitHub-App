
const ExplorePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="bg-glass rounded-lg shadow md:mt-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-lg font-bold text-center">
            Explore Popular Repositories
          </h1>
          <div className="flex flex-wrap mx-auto">
            <img src="/javascript.svg" alt="javascript logo" className="h-11 sm:h-20 cursor-pointer"/>
            <img src="/typescript.svg" alt="typescript logo" className="h-11 sm:h-20 cursor-pointer"/>
            <img src="/c++.svg" alt="c++ logo" className="h-11 sm:h-20 cursor-pointer"/>
            <img src="/python.svg" alt="python logo" className="h-11 sm:h-20 cursor-pointer"/>
            <img src="/java.svg" alt="java logo" className="h-11 sm:h-20 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
