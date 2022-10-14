import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import TestPage from "./pages/testPage/testPage";
import PricingPage from "./pages/pricingPage/pricingPage";
import Navigation from './layout/navigation/navigation';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import TestPageTwo from './screens/testsPages/testPage2/testPageTwo';

function App() {
  return (
    <>
      <div  className="gridSection-layout">
       <header><Header/></header>
        <nav>
             <Navigation/>
        </nav>

        <main>
           <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/tests" element={<TestPage />}/>
              <Route path="/pricing" element={<PricingPage/>}/>
              <Route path="/test2" element={<TestPageTwo/>}/>
           </Routes>
        </main>

      <footer><Footer/></footer>  
     </div>       
    </>
  );
}

export default App;
