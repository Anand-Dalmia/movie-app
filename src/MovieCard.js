// import {Component} from "react";

// class Moviecard extends Component{
//     // constructor(){
//     //     super();
//     //     this.state={
//     //         title:"The Avengers",
//     //         plot: "Supernatural powers show in the movie",
//     //         price: 199,
//     //         rating: 8.9,
//     //         stars:0,
//     //         fav: false,
//     //         isIncart: false
//     //     }
//     //     //  This is another way of binding
//     //     // this.addStars= this.addStars.bind(this);
//     //     //this.decStars = this.decStars.bind(this); // Bind the method in the constructor
//     // }

// //     addStars=()=>{

// //         if(this.state.stars>=5){
// //             return;
// //         }

// //         // Form1

// //         this.setState({
// //             stars: this.state.stars +0.5
// //         });

// // //  Second form
// // //  e===> prevState
// //         // this.setState((e)=>{
// //         //     return{
// //         //         stars: e.stars+0.5
// //         //     }
// //         // });


// //         // this.state.stars += 0.5;
// //         // console.log("Stars is added");
// //         // console.log("this.state.stars:", this.state.stars);


// //     }

// //     decStars=()=>{

// //         // Form1
// //         if(this.state.stars<=0){
// //             return;
// //         }

// //         this.setState({
// //             stars: this.state.stars - 0.5
// //         });

// //     }

// //     handleFav=()=>{
// //         this.setState({
// //             fav: !this.state.fav
// //         })
// //     }

// //     handleAddToCart = () =>{
// //         this.setState({
// //             isIncart: !this.state.isIncart
// //         })
// //     }


//     render(){
//         // Destructing the object
//         // const {title,plot,price,rating,stars,fav,isIncart} = this.state;
        

//         console.log(this.props);
//         const {movies,addStars}=this.props;
//         // This below code related to destructing in which we have changes the object name  movies to data
//         // const {movies:data}= this.props;
//         // const {title,plot,price,rating,stars,fav,isIncart} = this.props;
//         const {
//             title,
//             plot,
//             price,
//             rating,
//             stars,
//             fav,
//             isIncart,
//              // adding poster prop
//           } = this.props; // accessing props instead of state
//         return(
//             <>
//                 <div className="main">
//                     <div className="movie-card">
//                         <div className="left">
//                             <img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"/>
//                         </div>


//                         <div className="right">
//                         {/* We can use the {this.state.title} instead of {title} */}
//                             <div className="title">{title}</div>
//                             <div className="plot">{plot}</div>
//                             <div className="price">Rs.{price}</div>

//                             <div className="footer">
//                                 <div className="rating">{rating}</div>
//                                 <div className="star-dis">

//                                     <img alt="minus" 
//                                     src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" 
//                                     className="str-btn" onClick = {this.decStars}/>
                                    
//                                     <img alt="stars" 
//                                     src="https://cdn-icons-png.flaticon.com/128/477/477406.png" 
//                                     className="stars"/>

//                                      <img className="str-btn 
//                                      "alt="increase" 
//                                     src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
//                                     onClick = {()=>{addStars(movies)}} />  {/* {this.addStars.bind(this)} */}
                                    

//                                     <span className="starCount"> {stars} </span>
                                    
//                                 </div>
//                                 {/* {this.state.fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
//                                 <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

//                                 {/* This will give Toggling the favourite Button in single  */}
//                                 <button className= {fav ? "unfavourite-btn":"favourite-btn"} 
//                                 onClick={this.handleFav}>
//                                 {fav ? "unfavourite":"favourite"}
//                                 </button>

//                                 {/* <button className="favourite-btn">Favourite</button>
//                                 <button className="unfavourite-btn">Un-favourite</button> */}


//                                 {/* <button className="cart-btn">Add to cart</button> */}
//                                 <button className={isIncart?"unfavourite-btn":"cart-btn"} 
//                                 onClick={this.handleAddToCart}>
//                                 {isIncart? "Remove from the Cart":"Add to cart"}
//                                 </button>


                                


//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </>
//         )
//     }
    
// }

// export default Moviecard;


import React from "react";

class MovieCard extends React.Component{

    render(){
        
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  this.props.movies;
        
          
        return(
            //Movie Card
            <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => onDecStars(movies)}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                // No binding required as addStars() is an arrow function
                                onClick={() => onIncStars(movies)}
                            />
                            <span className="starCount">{stars}</span>
                        </div>

                        {/**conditional rendering on Favourite button */}
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  
                                onClick={() => onClickFav(movies)}> 
                                    
                                    {fav ? "Un-favourite":"Favourite"}

                        </button>
                            
                        {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  
                                onClick={() => onClickAddtocart(movies)}>
                                    
                                        {isInCart ? "Remove from Cart":"Add to Cart"}

                        </button>
                        
                    </div>
                </div>

            </div>
          
        )
    }
}

export default MovieCard;
