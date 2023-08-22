import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { Greeting, History, Directions } from "./pages/About";
import { ServiceOverview, ServiceProcess, ExpectedOutcomes } from "./pages/ServiceInfo";
import { ServiceCases, Reviews, RelatedNews } from "./pages/Gallery";
import { Announcements, FAQ, Inquiries } from "./pages/Support";
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/greeting" element={<Greeting />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/directions" element={<Directions />} />
          <Route path="/service-info/service-overview" element={<ServiceOverview />} />
          <Route path="/service-info/service-process" element={<ServiceProcess />} />
          <Route path="/service-info/expected-outcomes" element={<ExpectedOutcomes />} />
          <Route path="/gallery/service-cases" element={<ServiceCases />} />
          <Route path="/gallery/reviews" element={<Reviews />} />
          <Route path="/gallery/related-news" element={<RelatedNews />} />
          <Route path="/support/announcements" element={<Announcements />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/support/inquiries" element={<Inquiries />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
