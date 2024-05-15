import { FaCopy, FaRegStar } from "react-icons/fa"
import { FaCodeBranch, FaCodeFork } from "react-icons/fa6"
import { formatDate } from "../utils/functions";
import toast from "react-hot-toast";

const RepoComp = ({repo}) => {
  const release_date = formatDate(repo?.created_at);
  const repo_lang = `/${repo?.language}.svg`
  const handleCloneClick = async (repo) => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL cloned to clipboard");
		} catch (error) {
			toast.error("Clipboard write failed.");
		}
	};

  return (
    <li className=' mb-10 ms-7'>
      <span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			  rounded-full -start-3 ring-8 ring-white'
			  >
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
      <div className='flex gap-2 items-center flex-wrap'>
        <a
					href={repo?.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				  >
					{repo?.name}
				</a>
        <span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {repo?.stargazers_count}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repo?.forks_count}
				</span>
				<span
          onClick={() => handleCloneClick(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
      </div>
      <time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {release_date}
			</time>
      <p className='mb-4 text-base font-normal text-gray-300'>
        {repo?.description ? repo.description.slice(0, 500) : "No description provided."}
      </p>
			{repo?.language ? 
      (<img src={repo_lang.toLowerCase().replace(/\s/g, '')} alt={`${repo?.language} icon`} className='h-8' />) :
       null}
    </li>
  )
}

export default RepoComp
