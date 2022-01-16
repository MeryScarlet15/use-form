import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainModal from "./components/modals/main-modal/main-modal";
import Svg from "./components/svg/svg";
import { icons } from "./assets/icons/icons";
import MainHeader from "./components/main-header/main-header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/home/home";
import HandleValuesPage from "./pages/handle-values/handle-values";
import MainLayout from "./components/main-layout/main-layout";
import { routes } from "./constants/routes";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='handle-values' element={<HandleValuesPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div >
  );
};

export default App;
