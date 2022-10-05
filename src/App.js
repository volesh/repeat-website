import {Routes, Route} from "react-router-dom";
import {DesertsPage, DrinksPage, PizzaPage, SidesPage} from "./pages";
import {Provider} from "react-redux";



import {MainePage} from "./pages/MainePage";
import {Header} from "./components";
import {store} from "./reducer";



function App() {
  return (
    <Provider store={store}>
        <div>
            {<Header/>}
            <Routes>
                <Route path={'/'} element={<MainePage/>}/>
                <Route path={'/pizza'} element={<PizzaPage/>}/>
                <Route path={'/drinks'} element={<DrinksPage/>}/>
                <Route path={'/sides'} element={<SidesPage/>}/>
                <Route path={'/deserts'} element={<DesertsPage/>}/>
            </Routes>
        </div>
    </Provider>

  );
}

export default App;
