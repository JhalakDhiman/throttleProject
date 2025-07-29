import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from "./pages/Category";
import ProductDetails from './pages/ProductDetails'
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from "./pages/VerifyEmail";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col bg-richblack-900 h-full min-h-[100vh]">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product-details' element={<ProductDetails/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path='reset-password/:id' element={
            <ResetPassword />
        }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
