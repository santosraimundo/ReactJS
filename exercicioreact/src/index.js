import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

//parte da criação da renderização da nossa aplicação.
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);