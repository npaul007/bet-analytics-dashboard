import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NBAHeader } from "./components/NBAHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NBAHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
