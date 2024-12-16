//GETTING app.css
import './App.css';
//GETTING CALCULATOR COMPONENT
import Calculator from './component/calculater';
//GETTING HOOKS
import { useState } from 'react';
//GETTING HELMET FOR APP NAME AND DESCRIPTION
import { Helmet } from 'react-helmet';

function App() {
  //making state to view value in screen and set
  const [result, setResult] = useState("");

  //function for clear screen
  const handleClear = () => {
    setResult("");
  }
  //function to calculate the give value on screen
  const calculate = () => {
    try{
      setResult(eval(result.toString()));
    }
    catch{
      setResult("Error!");
      setTimeout(() => {
        setResult("")
      }, 2000)
    }
  };
  //function for getting values of buttons click
  const handleClick = (e) => {
    try{
      setResult(result.concat(e.target.value));
    }
    catch{
      setResult(e.target.value);
    }
  }
  //function for remove 1 num like backspace
  const handleBack = () => {
    try{
      setResult(result.slice(0, -1));
    }
    catch{
      setResult(result);
    }
  }
  //function for add or remove "-" before number
  const handleMinus = () => {
    try{
      if (result.startsWith("-")) {
      setResult(result.substring(1));
    } else {
      setResult("-" + result);
    }
    }
    catch{
      setResult(result);
    }
  }

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Calculator</title>
        <meta name="description" content="This is a Simple Calculator handle some features like: addition, substraction, etc." />
      </Helmet>
    <Calculator
    result = {result}
    calculate = {calculate}
    handleBack = {handleBack}
    handleClear = {handleClear}
    handleClick = {handleClick}
    handleMinus = {handleMinus}
    />
    </>
  );
}

export default App;
