import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signinform from "./components/signin/Signinform";
import Regform from "./components/registration/Regform";
import Landing from "./components/langingpage/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signinform />} />
          <Route path="/register" element={<Regform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
