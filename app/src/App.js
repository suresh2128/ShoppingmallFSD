//import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './frontend/home';
import Shop from './frontend/shop';
import Formzz from './frontend/vara';
import Cart from './frontend/cart';
import Auth from './frontend/login';
import Formzzfemale from './frontend/female';
import Contact from './frontend/contact';
import About from './frontend/About';


 function App() {
//     useEffect(()=>{
//       if(!localStorage.getItem('user')){
//         alert("please login your account")
//         window.location.href='/'
//       }
//     },[])

  return (
    <div className="App-container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>  
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/vara' element={<Formzz/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/female' element={< Formzzfemale/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
