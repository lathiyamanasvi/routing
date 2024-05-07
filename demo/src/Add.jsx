import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Add = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [rec,setRec] = useState([])

    useEffect(()=>{
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setRec(all)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random() * 10)
        let obj = {id,name,phone}
        let all = [...rec,obj]
        localStorage.setItem('user',JSON.stringify(all))
        setRec(all)
        setName('')
        setPhone('')
    }
   
  return (
   <center>
   <h1>Add Page</h1>

   <form onSubmit={handleSubmit}>
            <table border={1}>
               <tbody>
                    <tr>
                        <td>Name : </td>
                        <td><input type="text" name='name' onChange={ (e) => setName(e.target.value) } value={name}/></td>
                    </tr>
                    <tr>
                        <td>Phone : </td>
                        <td><input type="text" name='phone' onChange={ (e) => setPhone(e.target.value) } value={phone}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit"/></td>
                    </tr>
               </tbody>
            </table>
        </form>
    <Link to={'/'}>View</Link>
   </center>
  )
}

export default Add
