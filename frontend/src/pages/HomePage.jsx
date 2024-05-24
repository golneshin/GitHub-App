import { useCallback, useEffect, useState } from "react"
import toast from 'react-hot-toast'

import ProfileInfoCompo from "../components/ProfileInfoCompo"
import ReposCompo from "../components/ReposCompo"
import SearchCompo from "../components/SearchCompo"
import SortRepoCompo from "../components/SortRepoCompo"
import SpinnerComp from "../components/SpinnerComp"

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortType, setSortType] = useState('')
  // ====================================================
  const getUserProfileAndRepos = useCallback(async(username='heschmat') => {
    setLoading(true)

    try {
      const res = await fetch('/api/users/' + username)

      const { userProfile, repos } = await res.json()

      setUserProfile(userProfile)
      setRepos(repos)

      return { userProfile, repos }
      
    } catch (error) {
      toast.error(error.message)
      
    } finally {
      setLoading(false)
    }
  },[])
  // ====================================================
  useEffect(() => {
    getUserProfileAndRepos()
  }, [getUserProfileAndRepos])
  // ====================================================
  const onSearch = async (e, username) => {
    e.preventDefault()
    setLoading(true)
    setUserProfile(null)
    setRepos([])

    const { repos, userProfile } = await getUserProfileAndRepos(username)
    setUserProfile(userProfile)
    setRepos(repos)
    setLoading(false)
  }
  // ====================================================
  const onSort = (sortType) => {
    
    if (sortType === 'forks') {
      repos.sort((a, b) => b.forks_count - a.forks_count)
    } else if (sortType == 'stars') {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
    } else if ( sortType == 'recents'){
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    }

    setSortType(sortType)
    setRepos([...repos])
  }
  // ====================================================
  return (
    <div>
      <SearchCompo onSearch={onSearch} />
      {repos.length > 0 && <SortRepoCompo onSort={onSort} sortType={sortType} />}
      <div className='flex gap-0 flex-col md:flex-row justify-center items-start'>
        {userProfile && !loading && <ProfileInfoCompo userProfile={userProfile} />}
        {!loading && <ReposCompo repos={repos} />}
        {loading && <SpinnerComp/>}
      </div>
    </div>
  )
}

export default HomePage;
