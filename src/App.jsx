import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './dotenv';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
	const [moviesArray, setMoviesArray] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeGenre, setActiveGenre] = useState(0);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
		);
		const movies = await res.json();
		setMoviesArray(movies.results);
		setFiltered(movies.results);
	};

	return (
		<div className="App">
			<Filter
				popular={moviesArray}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<motion.div layout className="popular-movies">
				<AnimatePresence>
					{filtered.map((movie) => {
						return <Movie key={movie.id} movie={movie} />;
					})}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default App;
