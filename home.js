import React, { Component } from "react";
import y from './components/image/y.jpeg';
import App from './App.css';

class Home extends Component{
    render(){
        return(
         <div>
            <center><h1><i>shop with us</i></h1></center>
            <img  src={y} alt="shop" className="a"/>
         </div>   
        )
    }
}
export default Home;