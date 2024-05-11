import { FaHeart } from "react-icons/fa"

const LikesPage = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 bg-glass">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 bg-glass">
          <tr>
            <th scope="col" className="px-6 py-3">NO</th>
            <th scope="col" className="px-6 py-3">username</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-glass">
          <tr className=" items-center">
            <td className="px-6 py-4">
              <span>
                1
              </span>
            </td>
            <th 
              scope="row" 
              className=" flex items-center gap-4 px-6 py-4 font-medium
              text-gray-900 whitespace-nowrap dark:text-white">
              <img 
                src="/profile.png"
                className="w-10 h-10 rounded-full border border-gray-800"
              />
              dasdas
            </th>
            <td className="px-6 py-4">das</td>
            <td className=" gap-4 px-6 py-4">
              <div className="flex gap-2 items-center">
                <FaHeart size={20} className=" text-red-500"/>
                liked your profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LikesPage
