import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import SubLayout from './components/Layout/SubLayout/SubLayout';
import Home from './pages/Home/Home';
import { Greeting, History, Directions } from './pages/About';
import { ServiceInfo } from './pages/ServiceInfo';
import { ServiceCases, Reviews, RelatedNews } from './pages/Gallery';
import { Announcements, FAQ, Inquiries } from "./pages/Support";
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<SubLayoutRoutes />} />
          <Route path='/service-info/*' element={<SubLayoutRoutes />} />
          <Route path='/gallery/*' element={<SubLayoutRoutes />} />
          <Route path='/support/*' element={<SubLayoutRoutes />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

function SubLayoutRoutes() {
  return (
    <SubLayout>
      <Routes>
        <Route path='greeting' element={<Greeting />} />
        <Route path='history' element={<History />} />
        <Route path='directions' element={<Directions />} />
        <Route path='service-info' element={<ServiceInfo />} />
        <Route path='service-cases' element={<ServiceCases />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='related-news' element={<RelatedNews />} />
        <Route path='announcements' element={<Announcements />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='inquiries' element={<Inquiries />} />
      </Routes>
    </SubLayout>
  );
}

export default App;
