
import './App.css'
import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';
import DeleteBooks from './pages/DeleteBooks';

import Signup from './components/home/Signup';
import Login from './components/home/Login';
import Contact from './components/home/Footer';
import ContactForm from './pages/ContactForm';
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBooks/>}/>
      <Route path='/books/edit/:id' element={<EditBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/contactform" element={<ContactForm/>}/>
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
      
      
    </>
  )
}

export default App
