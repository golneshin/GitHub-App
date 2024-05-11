import RepoComp from "./RepoComp"

const ReposCompo = () => {
  return (
    <div className=" lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6">
      <ol className="relative border-s border-gray-200">
        <RepoComp/>
        <RepoComp/>
        <RepoComp/>
        <RepoComp/>
        <RepoComp/>
        <RepoComp/>
      </ol>
    </div>
  )
}

export default ReposCompo
