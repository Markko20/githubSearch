import React from 'react'
import { IRepo } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const RepoCard = ({repo}: { repo: IRepo }) => {

	const {addFavorite, removeFavorite} = useActions()
  const {favorites} = useAppSelector(state => state.github)

  const [isFav, setisFav] = React.useState(favorites.includes(repo.html_url))

	const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		addFavorite(repo.html_url)
    setisFav(true)
	}

	const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		removeFavorite(repo.html_url)
    setisFav(false)
	}

	return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFav && <button
          className="py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFavorite}
        >
          Add
        </button>}

				{ isFav && <button
          className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          onClick={removeFromFavorite}
        >
          remove 
        </button>}
      </a>
    </div>
  );
}

export default RepoCard