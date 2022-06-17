import React from "react";
import './App.css';
import CartCat from "./components/CartCat/CartCat";

function App() {
  return (
      <div className={'main-flex'}>
        <div className={'main-container'}>
          <h1 className={'main'}>Ты сегодня покормил кота?</h1>
            <CartCat />
        </div>
      </div>
  );
}

export default App;
