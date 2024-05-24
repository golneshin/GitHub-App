import { FaHeart } from "react-icons/fa"
// import { useAuthContext } from "../context/authContext"
import { formatDate } from "../utils/functions"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const LikesPage = () => {
  // Solution #1:
  // const { authUser } = useAuthContext()
  // const likes = authUser?.likedBy

  // Solution #2:
  const [likes, setLikes] = useState([]);

	useEffect(() => {
		const getLikes = async () => {
			try {
				const res = await fetch("/api/auth/check", { credentials: "include" });
				const data = await res.json();
        console.log('data:', data)
				if (data.error) throw new Error(data.error);

				setLikes(data.user.likedBy);
			} catch (error) {
				toast.error(error.message);
			}
		};
		getLikes();
	}, []);
	console.log("likes:", likes);

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
          {likes.map( (user, idx) => (
            <tr className=" items-center" key={user.username}>
              {/* number */}
              <td className="px-6 py-4">
                <span>
                  {idx + 1}
                </span>
              </td>
              {/* image & username */}
              <th 
                scope="row" 
                className=" flex items-center gap-4 px-6 py-4 font-medium
                text-gray-900 whitespace-nowrap dark:text-white">
                <img 
                  src={user.avatarUrl}
                  className="w-10 h-10 rounded-full border border-gray-800"
                />
                {user.username}
              </th>
              {/* date */}
              <td className="px-6 py-4">{formatDate(user.likedDate)}</td>
              <td className=" gap-4 px-6 py-4">
                <div className="flex gap-2 items-center">
                  <FaHeart size={20} className=" text-red-500"/>
                  liked your profile
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LikesPage
