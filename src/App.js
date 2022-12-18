import { Route, Routes } from "react-router";
import About from "./Components/Pages/About/About";
import Checkout from "./Components/Pages/ChecKout/Checkout";
import Blogs from "./Components/Pages/Home/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home/Home";
import OurMenu from "./Components/Pages/Home/OurMenu/OurMenu";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import ServiceDetail from "./Components/Pages/Login/ServiceDetail/ServiceDetail";
import Header from "./Components/Pages/Shared/Header/Header";
import NotFoundPage from "./Components/Pages/Shared/NotFoundPage/NotFoundPage";



function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
    <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="/service"element={<OurMenu></OurMenu>}></Route>
        <Route path="/service/:serviceID"element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/blogs"element={<Blogs></Blogs>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path ="/register"element={<Register></Register>}></Route>
        <Route path ="/checkout"element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
        }></Route>

        <Route path="*"element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
    </div>
  );

}

export default App;
