import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SlideShow from "./pages/Home/SlideShow/SlideShow"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <SlideShow />
        <div className="example">
          <h1>서비스사례</h1>
        </div>
        <div className="product">
          <h1>서비스소개</h1>
        </div>
      </Layout>
      <Routes>
        <Route path="/main/1/sub/1" />
      </Routes>
    </Router>
  );
}

export default App;