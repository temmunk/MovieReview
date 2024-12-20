import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'; 
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Details from './components/details/Details';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  

  const getMovies = async () =>{

    try {
      const response = await api.get("/api/v1/movies");

      console.log(response.data);

      setMovies(response.data);

    } catch(err){
      console.error(err);
    }

   
  }

  const getMovieData = async (movieId) => {
    try {
        const response = await api.get(`/api/v1/movies/${movieId}`);
        console.log(response.data);
        setMovie(response.data);
        setReviews(response.data.reviewIds || []);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>} ></Route>
          <Route path="/Details/:movieId" element = {<Details getMovieData={getMovieData} reviews = {reviews} movie={movie} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
