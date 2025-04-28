import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClaimForm from './components/ClaimForm';
import ClaimsList from './components/ClaimsList';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
      <header className="text-center p-4 bg-white shadow-sm mb-4 rounded">
          <h1>Insurance Claims App</h1>
          <p>Submit and view insurance claims easily.</p>
          <nav className="d-flex justify-content-center gap-2 mt-3">
            <Link to="/" className="btn btn-primary">Submit Claim</Link>
            <Link to="/claims" className="btn btn-secondary">View Claims</Link>
          </nav>
        </header>

        <main className="flex-grow-1 d-flex justify-content-center align-items-start">
  <div className="w-100 d-flex justify-content-center" style={{ maxWidth: '1200px', padding: '20px' }}>
    <Routes>
              <Route path="/" element={<ClaimForm />} />
              <Route path="/claims" element={<ClaimsList />} />
            </Routes>
          </div>
        </main>

        <footer className="text-center p-3 bg-white mt-auto">
          <small>© 2025 Bryan Pierre</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
