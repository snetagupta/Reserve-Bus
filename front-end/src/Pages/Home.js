import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Rating from "../Components/Rating";

function Home (){
    return(
     <>
     <Navbar/>
     <Main/>
     <Rating/>
     <Footer/>
     </>
    )
}

export default Home;