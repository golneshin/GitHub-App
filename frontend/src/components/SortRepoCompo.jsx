
const SortRepoCompo = ({onSort, sortType}) => {
  const BUTTONS = [
    {text:'Most Recents', category: 'recents'},
    {text:'Most Stars', category: 'stars'},
    {text:'Most Forks', category: 'forks'}
  ]

  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {BUTTONS.map(button => 
        <button 
          key={button.category}
          onClick={() => onSort(button.category)}
          type="button"
          className={`${sortType!==button.category && ' bg-cyan-600 border-blue-300'}
            py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm 
            font-medium focus:outline-none rounded-lg bg-glass`}
          >
          {button.text}
        </button>
      )}
    </div>
  )
}

export default SortRepoCompo
