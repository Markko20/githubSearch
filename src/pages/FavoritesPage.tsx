import { useAppSelector } from '../hooks/redux'
import RepoCard from '../components/RepoCard'

const FavoritesPage = () => {
	const {favorites} = useAppSelector(state => state.github)
	console.log(favorites)

	if(favorites.length === 0) return <p className='text-center mt-5'>No items</p>

	return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => (
          <li className='w-[560px]' key={f.id}>
            <RepoCard repo={f}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage