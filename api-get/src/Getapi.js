import React, { useEffect, useState } from 'react'
import "./App.css"

function Getapi() {
const [data, setData] = useState([])

   const url = "https://jsonplaceholder.typicode.com/users"
   useEffect(() =>{
    fetch(url)
    .then(Response => Response.json()).then(json =>{
            console.log("jasonnn", json)
        setData(json); 
    }).catch(e => { 
        console.log("e" , e);
    })
   }, []) 
  return (
        <div className='App'>
        <h2>Welcome</h2>
        <ul>
        {
            data.map(item =>{
                return(
                   <li><div className='item1'>{item.email}</div></li>
                )
            })
        }
        </ul>

        </div>
    
  )
}

export default Getapi