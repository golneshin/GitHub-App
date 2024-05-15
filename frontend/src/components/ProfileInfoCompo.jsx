import { IoLocationOutline } from "react-icons/io5";
import { TfiThought } from "react-icons/tfi";
import { FaHeart, FaEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { formatDate } from "../utils/functions";

const ProfileInfoCompo = ({userProfile}) => {

  const member_since = formatDate(userProfile?.created_at);

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 sticky md:top-10 px-2">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-3 items-center">
          {/* profile pic */}
          <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>
          {/* like & view */}
          <div className="flex flex-col gap-2">
            <button 
              type="button"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md 
              cursor-pointer border border-blue-400 flex items-center gap-2"
              >
              <FaHeart size={16}/>
              Like Profile
            </button>
            <a
							href={userProfile.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md 
              cursor-pointer border border-blue-400 flex items-center gap-2'
						  >
							<FaEye size={16} />
							View on Github
						</a>
          </div>
        </div>
        {/* profile info */}
        <div className="flex flex-col mt-2">
          {/* bio */}
          <div className='flex items-center gap-2'>
            {userProfile?.bio ? (<TfiThought />) : null}
            <p className='text-sm'>{userProfile?.bio}</p>
          </div>
          {/* location */}
          <div className='flex items-center gap-2'>
            {userProfile?.location ? (<IoLocationOutline />) : null}
            <p className='text-sm'>{userProfile?.location}</p>
          </div>
          {/* X account */}
          <div className='flex items-center gap-2'>
            {userProfile?.twitter_username ? (<FaXTwitter />) : null}
            <p className='text-sm'>{userProfile?.twitter_username}</p>
          </div>
          {/* member since */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>Member since</h3>
            <p className=''>{member_since}</p>
          </div>
          {/* full name */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>Full Name</h3>
            <p className=''>{userProfile?.name}</p>
          </div>
          {/* username */}
          <div className='my-2'>
            <h3 className='text-gray-600 font-bold text-sm'>User Name</h3>
            <p className=''>{userProfile?.login}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex gap-2 justify-center">
          {/* followers */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiUserFollowFill size={16}/>
            followers: {userProfile?.followers}
          </button>
          {/* following */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiUserFollowLine size={16}/>
            following: {userProfile?.following}
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          {/* public repos */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 sm:gap-1 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiGitRepositoryFill size={16}/>
            public repos: {userProfile?.public_repos}
          </button>
          {/* public gists */}
          <button 
            type="button"
            className="py-2.5 px-5 text-xs sm:text-sm gap-2 sm:gap-1 items-center
            font-medium focus:outline-none rounded-lg bg-glass flex"
            >
            <RiGitRepositoryFill size={16}/>
            public gists: {userProfile?.public_gists}
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default ProfileInfoCompo
