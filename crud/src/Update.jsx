import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';

function Update() {

  // const [data, setData] = useState([])
  const { id } = useParams();

  const [values, setValues] = useState({
    goalname: "",
    goalstatus: ""
})
    const navigate = useNavigate();
    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setValues(res.data);
            })
              
            .catch(err => console.log(err));
    }, [id])

    const handleUpdate = (event) => {
      event.preventDefault();
            axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
        .then(res =>  {
            console.log(res);
            navigate('/')

        
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update  User</h1>
        <form onSubmit={handleUpdate}>
            
            
           <div className='mb-3'>
            <label htmlFor='name'>UserName</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Username'
            value={values.username} onChange={e => setValues({ ...values, username: e.target.value})}

            ></input>
           </div>

           <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' className='form-control' placeholder='Enter Email'
            value={values.email} onChange={e => setValues({ ...values, email: e.target.value})}

            ></input>
           </div>


           <Link to="/" className='btn btn-success'>Submit</Link>
           <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
    </div>
</div> 
  )
}

export default Update