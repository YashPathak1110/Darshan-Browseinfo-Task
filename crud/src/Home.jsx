import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,  } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setData(res.data),
            )
            .catch(err => console.log(err));
    }, [data]);

    const handleDelete = (id) =>{
        const confirm = window.confirm("Would you like to Delete?.. ");
        if(confirm) {
            axios.delete(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success' >Add +</Link>
                </div>
            <table className='table table-stipend'>
                <thead>
                    <tr>
                        <th>goalname</th>
                        <th>goalstatus</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}> 
                                <td>{d.goalname}</td>
                                <td>{d.goalstatus}</td>
                            

                                <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2 btn1'>Read</Link>
                                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2 btn1'>Edit</Link>
                                <button onClick={e => handleDelete(d.id)} className='btn btn-danger btn1'>Delete</button>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

         </div>
        </div>
    )
    
                }
export default Home