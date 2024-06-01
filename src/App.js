import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailPage from './pages/CourseDetailPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Demo from './components/Demo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><CourseListingPage /><Reviews /></>} />
          <Route path="/course/:id" element={<><Navbar /><CourseDetailPage /></>} />
          <Route path="/dashboard" element={<><Navbar /><DashboardPage /></>} />
          <Route path="/search" element={<><Navbar /><CourseListingPage /></>} />
          <Route path="/demo" element={<><Navbar /><Demo /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
