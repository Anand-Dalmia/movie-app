// import {Component} from "react";
// import Moviecard from "./Moviecard";

// class MovieList extends Component{

//     constructor(){
//         super();
//         this.state={

//             movies: [
//                 {
//                     id: 1,
//                     title: 'The Avengers',                  
//                     plot:
//                       "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//                     Poster:
//                         'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
//                     rating: '8.0',            
//                     price: 99,            
//                     stars: 0,
//                     fav: false,
//                     isIncart: false                  
//                   },
//                   {
//                     id: 2,
//                     title: 'The Dark Knight',                  
//                     plot:
//                       'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//                     poster:
//                       'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',                  
//                     rating: '9.0',            
//                     price: 199,            
//                     stars: 0,            
//                     fav: false,
//                     isIncart: false                  
//                   },
//                   {
//                     id: 3,
//                     title: 'Iron Man',                 
//                     plot:
//                       'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
//                     poster:
//                       'https://m.media-amazon.com/images/M/MV5BNjMwNDkwNDctYjQ0MS00OTdlLWE0MmEtYzdjOGNmYmRhZDhmXkEyXkFqcGdeQXVyNjQ1Njk4MzM@._V1_FMjpg_UX1000_.jpg',                  
//                     rating: '7.9',            
//                     price: 139,            
//                     stars: 0,            
//                     fav: false,
//                     isIncart: false                  
//                   }
//             ]
//             // title:"The Avengers",
//             // plot: "Supernatural powers show in the movie",
//             // price: 199,
//             // rating: 8.9,
//             // stars:0,
//             // fav: false,
//             // isIncart: false
//         }
//         //  This is another way of binding
//         // this.addStars= this.addStars.bind(this);
//         //this.decStars = this.decStars.bind(this); // Bind the method in the constructor
//     }

//     // addStars=()=>{

//     //     if(this.state.stars>=5){
//     //         return;
//     //     }

//         // Form1

//         // this.setState({
//         //     stars: this.state.stars +0.5
//         // });

// //  Second form
// //  e===> prevState
//         // this.setState((e)=>{
//         //     return{
//         //         stars: e.stars+0.5
//         //     }
//         // });


//         // this.state.stars += 0.5;
//         // console.log("Stars is added");
//         // console.log("this.state.stars:", this.state.stars);


//     }


//     handleIncStar=(movie)=>{
//         const {movies}=this. state;
//         // const mid= this.state.movies.indexof(movie);
//         const mid = movies.indexOf(movie);

//         if(movies[mid].stars>=5){
//             return;
//         }

//         movies[mid].stars +=0.5;

//         this.setStatestate({
//             movies:movies
//         })

//     }
    

//     render(){
        
//         // const {title,plot,price,rating,stars,fav,isIncart,poster}= this.state.movies;
//         const {movies}= this.state;

//         return(
//             <>
//               {/* <h1>Movie List</h1> */}

              
//               {/* <Moviecard title={title}
//                         plot={plot}
//                         price= {price}
//                         rating={rating}
//                         stars={stars}
//                         fav={fav}
//                         isIncart={isIncart}
//               /> */}
//               {/* Here props are using in the below code */}
//               {/* {movies.map((movie)=><Moviecard movies = {movie}/> )} */}
//               {movies.map((movie) => <Moviecard key={movie.id} {...movie} addStars={this.handleIncStar} />)}


              

//             </>
//         )
//     }
    
// }

// export default MovieList;

import React from "react";
import MovieCard from "./MovieCard";
// import {movies} from "./dataMovie";

class MovieList extends React.Component{
  //   constructor(){
  //       super();
  //       //Creating the state object 
  //       this.state = {
  //           movies : movies ,
  //           cartCount: 0
            
  //       } 
  // }

  // handleAddStars = (movie)=>{
  //   const {movies} = this.state;
  //   const movieId = movies.indexOf(movie);

  //   if(movies[movieId].stars <5){
  //       movies[movieId].stars += 0.5
  //   }

  //   this.setState({
  //       movies
  //   });
  // }

  // handleDecStars = (movie)=>{
  //   const {movies} = this.state;
  //   const movieId = movies.indexOf(movie);

  //   if(movies[movieId].stars > 0){
  //       movies[movieId].stars -= 0.5;
  //   }

  //   this.setState({
  //       movies
  //   })
 
  // }

  // handleToggleFav = (movie)=> {
  //   const {movies} = this.state;
  //   const movieId = movies.indexOf(movie);

  //   movies[movieId].fav = !movies[movieId].fav;

  //   this.setState({
  //       movies
  //   })
  // }

  // handleAddtocart = (movie)=> {
  //   const {movies} = this.state;
  //   const movieId = movies.indexOf(movie);

  //   movies[movieId].isInCart = !movies[movieId].isInCart;

  //   this.setState({
  //       movies
  //   })
  // } 
    render(){
        const {movies,addStars, decStars, toggleFav, toggleCart} =  this.props;

        console.log(this.props);
          
        return(
            <div className="main">
                {movies.map((movie) => (
                <MovieCard movies = {movie}
                           key = {movie.id}
                           onIncStars= {addStars}
                           onDecStars= {decStars}
                            onClickAddtocart={toggleCart}
                            onClickFav={toggleFav}
                           
                              
                            />

            ))}              
            </div>
        )
    }
  }


export default MovieList;