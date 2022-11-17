import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/notfounded/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />{" "}
            {/* передает динамически параметры*/}
            <Route path="/meal/:id" element={<Recipe />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
