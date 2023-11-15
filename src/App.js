import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
function App(){
  const [advice,setAdvice]=useState("")
  const fetchData=()=>{
    // axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    // .then((response)=>{
    //   setAdvice(response.data.en);
    axios.get("https://api.adviceslip.com/advice").then((response)=>{
         setAdvice(response.data.slip.advice)
        // const randomAdvice = response.data.en; // Assuming 'en' is the key for advice
        // setAdvice(randomAdvice);
    })
    .catch((error)=>{
       console.log(error);
    })
  }
  useEffect(()=>{
    return()=>{
      fetchData()
    };
  },[])
  return (
    <div className='App'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={()=>fetchData()}>
        <span> Give Me An Advice!!!</span></button>
      </div>
    </div>
  );
}

export default App;