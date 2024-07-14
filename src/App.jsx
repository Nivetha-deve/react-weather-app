import { useState } from "react";
import "./index.css";
import axios from "axios";

function App() {

  const [deg,setdeg] = useState("0");
  const[city,setCity] = useState("");
  const[desc,setDesc] = useState("");
  const[enteredValue,setEnteredValue] = useState("");

  function handleInput(event){
    setEnteredValue(event.target.value)
  }

  function getData() {

   var Weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredValue }&appid=887b21e087c4760b958d7e4062132a77`)

   Weather.then(function(response){
    setdeg(response.data.main.temp);
    setDesc(response.data.weather[0].main)
    setCity(response.data.name)
   });

  }
  
  return (
    <>
    <h1 className=" text-white text-5xl flex flex-row justify-center ">Weather Application</h1>
    <div className="flex flex-row justify-center h-[100vh] 
    items-center">
       {/* <div style={{backgroundImage:"linear-gradient(to top, #30cfd0 0%, #330867 100%)"}}  */}
       <div style={{backgroundImage:"linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"}}
      className="p-2 rounded-md h-60 w-96"  >
        <h2 className="font-medium shadow text-xl  text-white">Hello!⛅</h2>
        <p className="text-xl  text-white">Do you want to know the weather Report :)</p>
       <input type="text" onChange={handleInput} className="rounded-md h-6 text-xl mt-2 p-5 outline-none" placeholder="City Name ?" />
      
      <br />

      <button onClick={getData} className=" bg-black text-white rounded-lg p-2 mt-2 text-xl">
        Get Report ⚡</button>

      <p className="mt-2 text-xl  text-white">Degree: {deg} | City: {city} | Weather: {desc}</p>

      </div>
    </div>
    </>
  )
}

export default App;
