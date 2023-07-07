import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from './components/Home';

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
