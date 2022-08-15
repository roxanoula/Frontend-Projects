import React, {useState} from 'react'
import MovieCard from './MovieCard'

function SearchMovieComponent(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] =useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=df5a026a23ffa7f134bf858b23d800d1&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results)
        }catch(err) {
            console.log(err)
        }
    }

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }


    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label"> Search Criteria: </label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. comedies" 
                    value={query} 
                    onChange={handleOnChange}
                />
                <button className="button" type="submit"> Search </button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />  
                ))}
            </div> 
        </>
    )

}

export default SearchMovieComponent