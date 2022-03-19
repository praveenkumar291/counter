import React from "react";
import { connect } from "react-redux";
import {
  incplayerone,
  decplayerone,
  incplayertwo,
  decplayertwo,
} from "./Actions";
// import Test from "./form/Test";
// import FavFood from "./food/FavFood";
// import Todo from "./todos/Todo";
// import ImageSlider from "./components/Imageslider";
// import { SliderData } from "./components/SliderData";

// import Cal from './components/Cal'
// import Photo from './components/Photo'
// import UserName from './components/UserName'
// import Counter from './components/Counter'

const App = ({
  playerone,
  playertwo,
  incplayerone,
  decplayerone,
  incplayertwo,
  decplayertwo,
}) => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Cal/> */}
      {/* <Photo/> */}
      {/* <ImageSlider slides={SliderData}/> */}
      {/* <Todo /> */}
      {/* <FavFood/> */}
      {/* <UserName /> */}
      {/* <Test /> */}

      <center>
        <h3> player one details</h3>
        <hr />
        <p>
          Name:{playerone.name} | {""} Score:{playerone.score}
        </p>
        <hr />
        <br />
        <button onClick={() => incplayerone()}>Increment</button>
        <button onClick={() => decplayerone()}>Decrement</button>

        <h3> player two details</h3>
        <hr />
        <p>
          Name:{playertwo.name} | {""} Score:{playertwo.score}
        </p>
        <br />
        <button onClick={() => incplayertwo()}>Increment</button>
        <button onClick={() => decplayertwo()}>Decrement</button>
      </center>
    </div>
  );
};
const mapStateToProps = (state) => ({
  playerone: state.playerone,
  playertwo: state.playertwo,
});

export default connect(mapStateToProps, {
  incplayerone,
  decplayerone,
  incplayertwo,
  decplayertwo,
})(App);
