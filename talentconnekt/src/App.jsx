
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import EmployeeList from './pages/EmployeeList';
import Homepage from './pages/Homapage';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
        <div className="flex-grow">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeList />} />
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
