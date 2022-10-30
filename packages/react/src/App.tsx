import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./ui/components";
import { Home } from "./ui/pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
