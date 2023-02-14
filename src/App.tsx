import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "@ui/components";
import { Home } from "@ui/pages/home/Home";
import { ConfigLoader } from "./ConfigLoader";

const App = () => {
  return (
    <ConfigLoader>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigLoader>
  );
};

export default App;
