import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<div className="py-12 text-center text-muted-foreground italic">Explore page coming soon...</div>} />
          <Route path="settings" element={<div className="py-12 text-center text-muted-foreground italic">Settings page coming soon...</div>} />
          <Route path="*" element={<div className="py-24 text-center space-y-4">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-muted-foreground">Page not found</p>
          </div>} />
        </Route>
      </Routes>
      <Toaster position="top-right" closeButton richColors />
    </Router>
  );
}

export default App;
