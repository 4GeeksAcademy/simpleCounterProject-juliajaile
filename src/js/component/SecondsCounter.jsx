import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const SecondsCounter = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [userInput, setUserInput] = useState("");
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setSeconds(prev => prev +1);
    }, 1000); 
  }, []);

  
  useEffect(() => {
    if (seconds === 60 ){
      setMinutes (prev => prev +1)
      setSeconds(0)
    };
    
    if  (minutes === 60) {
      setHours (prev => prev +1)
    }; 
    
  }, [seconds]);


 
 function restartHours (){
  setHours(0);
 }
 function restartMinutes(){
  setMinutes(0);
 }
 function restartSeconds(){
  setSeconds(0);
 }
  
 const handleStopCounter = () => {
  clearInterval(intervalId.current);
 }


 const handleInput = (e) => {
  setUserInput(e.target.value);
 }


function manageCountdown () {
  clearInterval(intervalId.current);
  setSeconds(userInput);
  intervalId.current = setInterval(() => {
    setSeconds(prev => {
      if (prev === 0) {
        clearInterval(intervalId.current);
        alert("Time's up!");
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
}

const startCounter = () => {
  clearInterval(intervalId.current);
  intervalId.current = setInterval(() => {
    setSeconds(prev => prev +1);
  }, 1000);
}

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    manageCountdown();
  }
};

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-5">
      <div className="me-5 display-1"><FontAwesomeIcon icon={faClock} /></div>
      <div className="me-5 display-1">{hours}</div>
      <div className="me-5 display-1">{minutes}</div>
      <div value={seconds} className="me-5 display-1">{seconds}</div>
      <div>
         <button onClick={handleStopCounter} className="btn btn-primary me-3">Stop</button>
         <button onClick={startCounter} className="btn btn-primary me-3">Start</button>
         <button  onClick={()=> { restartHours (); restartMinutes(); restartSeconds()}} className="btn btn-secondary">Restart</button>
      </div>
      <div>
        <input value={userInput} type="text" className="ms-3" placeholder="Enter nº of seconds" onChange={handleInput} onKeyDown={handleKeyPress}></input>
      </div>
    </div>
     
  );

};
    

    
export default SecondsCounter;