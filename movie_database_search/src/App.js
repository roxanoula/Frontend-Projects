import logo from './logo.svg';
import './index.css';
import SearchMovieComponent from './SearchMoviesComponent'

function App() {
    return (
      <div className="container">
        <h1 className="title"> Search Movies by Features </h1>
        <SearchMovieComponent />
      </div>
      
    )
}

export default App;
