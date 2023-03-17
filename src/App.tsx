import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEvents } from "@codescouts/ui";

import { Auth } from "@ui/pages/Auth";
import { Front } from "@ui/pages/Front";
import { User } from "@ui/pages/User";

import { Header } from "@ui/Header";

import { OrderCreatedCorrectlyHandler } from "@domain/events/OrderCreatedCorrectlyHandler";

const App = () => {
  useEvents(() => {
    new OrderCreatedCorrectlyHandler();
  });

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
