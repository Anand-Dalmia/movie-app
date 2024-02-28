// import MovieCard from "./Moviecard";

import React from "react"
import Navbar from "./Navbar";
import MovieList from "./MovieList";
// import HeadingOne from "./HeadingOne";
// import HeadingTwo from "./HeadingTwo";
import { movies } from "./dataMovie";
import "./index.css"

// import Students from "./Students"; ---> This propos

// function App() {
//   return (
//     <>
//       {/* <h1>Movie App</h1> */}
//       <Navbar/>
//       <MovieList/>

//       {/* <HeadingOne/>
//       <HeadingTwo/> */}

//       {/* This below code related to prop understanding  */}
//       {/* <Students name="Alexa"  marks={70}/>
//       <Students name="Anand"/> */}

//     </>
//   );
// }


class App extends React.Component {

  constructor() {
    super();
    //Creating the state object 
    this.state = {
      movies: movies,
      cartCount: 0

    }
  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5
    }

    this.setState({
      movies
    });
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies
    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    let { movies,cartCount } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isInCart = !movies[movieId].isInCart;
    console.log(movies[movieId].isInCart);


    if(movies[movieId].isInCart){
      cartCount= cartCount+1
    }

    else{
      cartCount-=1;
    }

    this.setState({
      movies,
      cartCount
    })
    console.log(cartCount);
  }
  

  render() {

    const {movies, cartCount}=this.state;
    return (
      <>
        <Navbar cartCount= {cartCount}/>
        <MovieList  movies ={movies}
          addStars = {this.handleAddStars}
                 decStars = {this.handleDecStars}
                 toggleFav = {this.handleToggleFav}
                 toggleCart = {this.handleAddtocart}/>
        
      </>
    )
  }
}

export default App;
