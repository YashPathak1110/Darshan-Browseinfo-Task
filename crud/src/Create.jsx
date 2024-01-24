import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Create() {

    const [values, setValues] = useState({
       
       goalname: "",
       goalstatus: ""
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`, values)
        .then(res =>  {
            console.log(res);
            navigate('/')

        
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                
                <div className='mb-2'>
                <label htmlFor='name'>Goalname</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Goal-name'
                onChange={e => setValues({ ...values, name: e.target.value})}

                ></input>
               </div>

               <div className='mb-3'>
                <label htmlFor='name'>GoalStatus</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Username'
                onChange={e => setValues({ ...values, username: e.target.value})}

                ></input>
               </div>

              

               <button className='btn btn-success'>Submit</button>
               <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>  
  )
}

export default Create