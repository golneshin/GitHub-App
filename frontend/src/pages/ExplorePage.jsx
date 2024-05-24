import { useState } from "react"
import toast from "react-hot-toast"

import ReposCompo from "../components/ReposCompo"
import SpinnerComp from "../components/SpinnerComp"

const ExplorePage = () => {
  const [ loading, setLoading ] = useState(false)
  const [ repos, setRepos ] = useState([])
  const [ selectedLang, setSelectedLang ] = useState('')

  const getReposByLang = async (language) => {
    setLoading(true)
    setRepos([])

    try {
      const res = await fetch(`/api/explore/repos/${language}`)
      const {repos} = await res.json() 
      //{repo} is a nested object in explore API endpoint that has been destructured.
      setRepos(repos)
      setSelectedLang(language)
      
    } catch (error) {
      toast.error(error.message)

    } finally{
      setLoading(false)
    }
  }

  const LANGUAGES = [
    'javascript',
    'typescript',
    'c++',
    'python',
    'java',
    'html',
    'css',
    'r'
  ]

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="bg-glass sticky rounded-lg shadow md:mt-0 mb-2 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-lg font-bold text-center">
            Explore Popular Repositories
          </h1>
          <div className="flex flex-wrap mx-auto items-center">
            {LANGUAGES.map(lang => 
              <img 
                key={lang}
                src={`/${lang}.svg `}
                alt={`${lang} logo`} 
                className={`h-11 md:h-20 cursor-pointer md:p-2
                  ${lang==selectedLang && 'bg-glass rounded-lg'}`}
                onClick={() => getReposByLang(lang)}
              />
            )}
          </div>
        </div>
      </div>
      {!loading && repos.length > 0 && <ReposCompo repos={repos}/>}
      {loading && <SpinnerComp/>}
    </div>
  )
}

export default ExplorePage
