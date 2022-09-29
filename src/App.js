import {Routes, Route} from "react-router-dom";
import {DrinksPage, PizzaPage, SidesPage} from "./pages";
import {Header} from "./components";

import {useEffect, useState} from "react";
import React from "react";
import {MainePage} from "./pages/MainePage";


function App() {
  return (

    <div>
        {<Header/>}
      <Routes>
          <Route path={'/'} element={<MainePage/>}/>
          <Route path={'/pizza'} element={<PizzaPage/>}/>
          <Route path={'/drinks'} element={<DrinksPage/>}/>
          <Route path={'/sides'} element={<SidesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
