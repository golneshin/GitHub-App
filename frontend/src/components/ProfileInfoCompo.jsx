import { IoLocationOutline } from "react-icons/io5";
import { TfiThought } from "react-icons/tfi";
import { FaHeart, FaEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";

const ProfileInfoCompo = () => {
  const user = {
    avatarUrl: "/profile3.jpeg",
    location: "Sari/Iran",
    bio: "in progress . . .",
    X_account: "@gol",
    fullName: "Mamad Gol",
    userName: "gol",
    createdAt: "date",
    followers: 4,
    following: 78,
    publicRepos: 2,
    publicGists: 5
  }

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10 px-2">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-3 items-center">
          {/* profile pic */}
          <div className=" rounded-lg overflow-hidden">
            <img src={user.avatarUrl} className="w-24 h-24"/>
          </div>
          {/* like & view */}
          <div className="flex flex-col gap-2">
            <button 
              type="button"
              className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
              font-medium focus:outline-none rounded-lg bg-glass flex"
              >
              <FaHeart size={16}/>
              Like Profile
            </button>
            <button 
              type="button"
              className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
              font-medium focus:outline-none rounded-lg bg-glass flex"
              >
              <FaEye size={16}/>
              View on GitHub
            </button>
          </div>
        </div>
        {/* profile info */}
        <div className="flex flex-col mt-2">
          {/* bio */}
          <div className='flex items-center gap-2'>
            <TfiThought />
            <p className='text-sm'>{user.bio}</p>
          </div>
          {/* location */}
          <div className='flex items-center gap-2'>
            <IoLocationOutline />
            <p className='text-sm'>{user.location}</p>
          </div>
          {/* X account */}
          <div className='flex items-center gap-2'>
            <FaXTwitter />
            <p className='text-sm'>{user.X_account}</p>
          </div>
          {/* member since */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>Member since</h3>
            <p className=''>{user.createdAt}</p>
          </div>
          {/* full name */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>Full Name</h3>
            <p className=''>{user.fullName}</p>
          </div>
          {/* username */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>User Name</h3>
            <p className=''>{user.userName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex gap-2">
          {/* followers */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiUserFollowFill size={16}/>
            followers: {user.followers}
          </button>
          {/* following */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiUserFollowLine size={16}/>
            following: {user.following}
          </button>
        </div>
        <div className="flex gap-2">
          {/* public repos */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiGitRepositoryFill size={16}/>
            public repos: {user.publicRepos}
          </button>
          {/* public gists */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiGitRepositoryFill size={16}/>
            public gists: {user.publicGists}
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default ProfileInfoCompo
