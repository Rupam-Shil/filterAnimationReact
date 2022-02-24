import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './dotenv';
function App() {
	const [moviesArray, setMoviesArray] = useState([]);
	const fetchPopular = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
		);
		const movies = await res.json();
		setMoviesArray([...movies.results]);
		console.log(moviesArray);
	};

	useEffect(() => {
		fetchPopular();
	}, []);

	return (
		<div className="className">
			<h1>Hello</h1>
		</div>
	);
}

export default App;
