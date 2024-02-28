// import React from "react";

// class Students extends React.Component{    
//     render(){
//         console.log(this.props);
//         const {name,marks} = this.props
//         return(
//             <>
//                 {/* <h1>Hello! {this.props.name}</h1> */}
//                 <h1>Hello! {name}</h1>
//             </>
//         )
//     }
// }

// export default Students;

function Students(props){
    const {name,marks}= props; 
    return(
        <>
            <h1>Hello! {name}</h1>
            <p>{marks}</p>
            <hr/>
        </>
        
    )
}

export default Students;
