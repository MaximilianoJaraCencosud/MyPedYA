import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotImplemented from "./pages/NotImplemented/NotImplemented";
import List from "./pages/List/List";
import Home from "./pages/Home/Home";
import RegisterLocal from "./pages/RegisterLocal/RegisterLocal";
import Error404 from "./pages/Error404/Error404";
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="help" element={<NotImplemented />} />
          <Route path="newLocal" element={<RegisterLocal />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
