import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [rec,setRec] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setRec(all)
        let single = all.find(val => val.id == id)
        setName(single.name)
        setPhone(single.phone)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let update = rec.map((val)=>{
            if(val.id == id){
                return{
                    ...val,
                    name:name,
                    phone:phone
                }
            }
            return val
        })
        setRec(update)
        localStorage.setItem('user',JSON.stringify(update));
        setName('')
        setPhone('')
    }
   
  return (
   <center>
   <h1>Edit Page</h1>

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

export default Edit
