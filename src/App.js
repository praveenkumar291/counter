import React from "react";
import ImageSlider from "./components/Imageslider";
import { SliderData } from "./components/SliderData";


// import Cal from './components/Cal'
// import Photo from './components/Photo'
// import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Cal/> */}
      {/* <Photo/> */}
      <ImageSlider slides={SliderData}/>
     
    </div>
  );
};

export default App;
