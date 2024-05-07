import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const View = () => {

    const [rec,setRec] = useState([])

    useEffect(()=>{
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setRec(all)
    },[])

    const deleteData = (id) => {
        let d = rec.filter((val)=>{
            return val.id != id
        })
        setRec(d)
        localStorage.setItem('user',JSON.stringify(d))
    }


  return (
    <center>
   <h1>View Page</h1>
   <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        rec.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <button onClick={ () => deleteData(val.id) }>Delete</button> 
                                    <button>
                                            <Link to={`/edit/${val.id}`}>Edit</Link>
                                        </button>
                                </tr>
                            )
                        })
                    }                
                </tbody>
            </table>

    <Link to={'/add'}>Add</Link>
   </center>
  )
}

export default View
