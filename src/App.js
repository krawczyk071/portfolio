import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LangProvider } from "./components/context/lang";

function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
        <Footer />
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
