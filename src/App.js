import React from "react";
import { createStore } from "redux";
// import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
import {Provider} from 'react-redux';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

//store
const store = createStore(reducer, initialStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



function App() {
  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}

export default App;
