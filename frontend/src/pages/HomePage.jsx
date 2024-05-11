import ProfileInfoCompo from "../components/ProfileInfoCompo"
import ReposCompo from "../components/ReposCompo"
import SearchCompo from "../components/SearchCompo"
import SortRepoCompo from "../components/SortRepoCompo"

const HomePage = () => {
  return (
    <div>
      <SearchCompo/>
      <SortRepoCompo/>
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        <ProfileInfoCompo/>
        <ReposCompo/>
      </div>
    </div>
  )
}

export default HomePage;
