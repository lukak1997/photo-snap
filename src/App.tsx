import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stories from "./pages/stories/Stories";
import Features from "./pages/Features/Features";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stories" element={<Stories />}/>
        <Route path="/features" element={ <Features />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
