// import Header from "./components/Header";
// import Cardcontainer from "./components/cards-container";
// import Todolistcontainer from "./components/Todolistcontainer";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landingpage from "./pages/Landingpage";
import {useState} from "react";

function App() {
   
  const [ruser, setruser]=useState([{

     user:"vijay",
     pwd:"09011995"
 }])

  return(
     <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login ruser={ruser} setruser={setruser}/>}></Route>
        <Route path="/Signup" element={<Signup ruser={ruser} setruser={setruser}/>}></Route>
        <Route path="/Landingpage" element={<Landingpage/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  )
}


export default App