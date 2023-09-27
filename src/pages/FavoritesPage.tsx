import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
	const {favorites} = useAppSelector(state => state.github)
	console.log(favorites)

	if(favorites.length === 0) return <p className='text-center mt-5'>No items</p>

	return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="_black">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage