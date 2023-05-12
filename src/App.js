import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = [
    "Bmw",
    "Camaro",
    "Ferrari",
    "Fiat",
    "Honda",
    "Mercedes",
    "Nissan",
    "Pejo",
  ];
 return getRandomCourse[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse])
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Araba Ekle </button>
      <Course />
    </div>
  );
}

export default App;
