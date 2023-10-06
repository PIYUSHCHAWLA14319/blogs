import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
// import Header from './Componets/Header';
import Addblog from './Pages/Addblog';
import AddCategory from './Pages/AddCategory';
import SingleBlog from './Pages/SingleBlog';
import PrivateRoute from './Services/ProtectRouth'
import Headert from './Componets/Headert';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Headert/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<PrivateRoute/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-blog' element={<Addblog/>}/>
      <Route path='/add-category' element={<AddCategory/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
