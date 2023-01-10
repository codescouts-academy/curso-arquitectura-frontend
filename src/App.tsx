import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DependencyInjectionContainer } from "@codescouts/ui";

import { Header } from "@ui/components";
import { Home } from "@ui/pages/home/Home";

import { buildDependencies } from "./di";

const App = () => {
  return (
    <DependencyInjectionContainer builder={buildDependencies}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DependencyInjectionContainer>
  );
};

export default App;
