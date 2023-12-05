import { useState } from "react";
// import SearchResultsList from "./SearchResultsList";
import { apiKey } from "../../api/config";
import { Link } from "react-router-dom";





const Search = () => {
    const [query, setQuery] = useState("");
    const [wallpaperList, setWallpaperList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);

        fetch(`/api/v1/search?q=${query}&sorting=random&purity=100&ref=fp&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => setWallpaperList(data.data))
            .catch(error => console.error('Error fetching photos:', error))
            .finally(() => setLoading(false));


    }

    return (
        <>
            <div id="search" className="z-10 fixed left-96 top-3 flex justify-center rounded-md rounded-r-none bg-red-300 ">
                <input type="search" value={query} name="search-form" placeholder="Find your perfect wallpaper "
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-96 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md rounded-r-none py-1 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                <button onClick={handleSearch} disabled={loading} className="bg-red-300 rounded-md rounded-l-none text-gray-900 p-3 py-2">
                    {loading ? 'Searching...' : 'Find'}
                </button>
            </div >
            <div className="grid relative top-16 grid-flow-dense grid-cols-5 bg-red-300">
                {wallpaperList && wallpaperList.map(
                    (wallpaper) => (
                        <div key={wallpaper.id} className="relative p-1">
                            <Link to={`/review/${wallpaper.id}`} >
                                <img className="w-full aspect-video object-cover" src={wallpaper.thumbs.original} alt="" />
                                <p className=" absolute bottom-1 left-2 text-white">{wallpaper.resolution}</p>
                            </Link>
                        </div>)
                )}
            </div>
        </>
    );
}

export { Search as Component };

export default Search; 
