import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from "./containers/Header";
import Home from "./pages/Home";


function App() {
  return (
   <>
  <Header/>
  <Home />
  {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter> */}

   </>
  );
}

export default App;
