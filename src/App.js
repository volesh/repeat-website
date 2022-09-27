import {Routes, Route} from "react-router-dom";
import {PizzaPage} from "./pages";
import {Header} from "./components/header/Header";


function App() {
  return (
    <div>
        {<Header/>}
      <Routes>
        <Route path={'/'} element={<PizzaPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
