import "./index.css";

import { DIProvider } from "@codescouts/ui";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { Provider } from "./Provider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
