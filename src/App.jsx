import "./App.css";
import React from "react";
import AppRoutes from "./router/routes";

const App = () => {
  return (
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
};

export default App;