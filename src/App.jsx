import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './dotenv';
import Movie from './Movie';
import Filter from './Filter';

function App() {
	const [moviesArray, setMoviesArray] = useState([]);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
		);
		const movies = await res.json();
		setMoviesArray(movies.results);
	};

	return (
		<div className="App">
			<Filter />
			<div className="popular-movies">
				{moviesArray.map((movie) => {
					return <Movie key={movie.id} movie={movie} />;
				})}
			</div>
		</div>
	);
}

export default App;
