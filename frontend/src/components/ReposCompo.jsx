import RepoComp from "./RepoComp"

const ReposCompo = ({repos}) => {
  return (
    <div className=" lg:w-2/3 w-full bg-glass rounded-lg pl-8 pr-1 md:pr:4 py-6 ml-2">
      <ol className="relative border-s border-gray-200">
        {repos.map( repo => <RepoComp key={repo.id} repo={repo}/>)}
        {repos.length == 0 && <p className="flex items-center justify-center h-32">No Repos Found</p>}
      </ol>
    </div>
  )
}

export default ReposCompo
