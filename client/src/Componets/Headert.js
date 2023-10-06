import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Headert = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    
    const logoutp=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        alert('LogOut Successfull')
        navigate('/login')
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Chawla Piyush</a> */}
    <Link className="navbar-brand text-white mx-3" to="/">
            Chawla Piyush
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className='nav-link text-white' to='/'>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link className='nav-link text-white' to='/add-blog'>Add Blog</Link>
        </li>
        <li className='nav-item '>
                        <Link className='nav-link text-white' to='/add-category'>Add Category</Link>
    </li>
      </ul>
      <div className="div-inline mx-auto my-2 my-lg-0">
                    {
                        token && token != null ?
                       <>
                        <button className='btn btn-primary'>Welcome :👨‍💼{username}</button>
                        <button className='btn btn-danger' onClick={logoutp}>Logout</button>
                       </>
                   :
                   <>
                   
                  
                    <Link to={"/login"}><button className='btn btn-danger ms-2'>Login</button></Link>
                    <Link to={"/register"}><button className='btn btn-light ms-2 '>Register</button></Link>
                    </>}
                </div>
      
    </div>
   
  </div>
  
</nav>
    </>
  )
}

export default Headert
