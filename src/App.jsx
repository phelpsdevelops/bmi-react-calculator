import React from 'react'
import { useState,useEffect } from 'react';

const App = () => {

  const [height, setHeight]= useState("");
  const [weight, setWeight]= useState("");
  const [result, setResult]= useState("");

  const calculateBMI = () =>{

    if(!height || !weight){
      setResult("Please enter both height and weight!");
      return;
    }

    const heightInMeters =height/100;
    const bmi= (weight/(heightInMeters*heightInMeters)).toFixed(1);

    let category="";
    if(bmi<18.5) category="underweight";
    else if(bmi <25){ category="normal weight"}   
    else if( bmi <30) {category="overweight"}
    else category="obese"
  

    setResult(`Your BMI is ${bmi}: You are ${category}`)

  };


  return (
    <div>
        <div className='container'>
          <h1>BMI Calculator</h1>
          {/* Height */}
          <label htmlFor="height">Height (cm)</label>
          <input type="number"  id="height" placeholder='e.g. 170' value={height} onChange={(e)=>setHeight(e.target.value)}/>

          {/* Weight */}
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number"  id="weight" placeholder='e.g. 65'  value={weight} onChange={(e)=>setWeight(e.target.value)}/>

          {/* button */}
          <button onClick={calculateBMI}>Calculate</button>

          {/* result */}
          <div id="result">
     {result}

          </div>
        </div>



    </div>
  )
}
export default App;