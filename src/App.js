import ExpenseItem from "./components/CharacterCardContainer";
import * as React from "react";

import { ResponsiveAppBar } from "./components/NavBar";

import { CongressContextProvider } from "./contexts/CharactersContext";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import LoginForm from "./components/LoginForm"
function App() {
  return (
    <div>
      <CongressContextProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/congress" element={<ExpenseItem />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LoginForm />} />
          
        </Routes>
      </CongressContextProvider>
    </div>
  );
}

export default App;
