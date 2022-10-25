import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME  from './components/home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HOME />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
