import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import TestPage from "./pages/testPage/testPage";
import PricingPage from "./pages/pricingPage/pricingPage";
import Navigation from './layout/navigation/navigation';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

function App() {
  return (
    <>
      <div  className="gridSection-layout">
       <header><Header/></header>
        <navigation>
             <Navigation/>
        </navigation>

        <main>
           <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/tests" element={<TestPage />}/>
              <Route path="/pricing" element={<PricingPage/>}/>
           </Routes>
        </main>

      <footer><Footer/></footer>  
     </div>       
    </>
  );
}

export default App;
