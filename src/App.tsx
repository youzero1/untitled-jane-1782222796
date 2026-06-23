import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="min-h-screen flex items-center justify-center bg-gray-100"><p className="text-gray-500">Loading todos…</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}
