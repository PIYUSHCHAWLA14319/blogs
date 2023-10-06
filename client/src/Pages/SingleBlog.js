import axios from 'axios';
import React,{useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const navigate = useNavigate();
  const {id}=useParams()
  const [blog,setBlog]=useState({});
  useEffect(()=>{
    const fetchallBlog = async()=>{
      const res = await axios.get(`http://localhost:8000/api/v1/get/blog/${id}`,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
       },
      );
      setBlog(res.data)
    };
    fetchallBlog()
  },[id]);
  console.log(blog,"blog")
  return (
    <>
      <div className="container shadow py-3">
        <div className="col-md-12 d-flex items-center justify-content-center bg-light">
            <div className="row">
                <h1 className='py-3'>{blog.title}</h1>
                <img src={`http://localhost:8000/${blog?.thumbnail}`} alt="" className='img img-responsive img-rounded py-3' />
                <p className='my-3'>{blog.description}</p>
            </div>
        </div>
        <button className='btn btn-secondary' onClick={()=>navigate('/')}>Back To Post</button>
      </div>
    </>
  )
}

export default SingleBlog
