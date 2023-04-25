import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
const [readData,setReadData] = useState([])
    const getData = () => {
        axios.get('https://643a3d76bd3623f1b9af6b4a.mockapi.io/crud-app')
        .then((res) => {
          console.log(res)
        setReadData(res.data)
        });
    }

     useEffect(() => {
       getData()
     },[])

     const deleteItem = (id) =>{
      axios.delete(`https://643a3d76bd3623f1b9af6b4a.mockapi.io/crud-app/${id}`)
      .then(() => {
        getData()
    })
    }

  const  locallyStoreData = (id,FName,FthrName,phoneNo,Ages,Adressess,EmailNo,Passwrd) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', FName)
    localStorage.setItem('FatherName', FthrName)
    localStorage.setItem('Contact', phoneNo)
    localStorage.getItem('Age', Ages)
    localStorage.setItem('Address', Adressess)
    localStorage.setItem('email', EmailNo)
    localStorage.setItem('Password', Passwrd)
  }

  return (
    <>
     <table className="table">
  <thead   style={{ backgroundColor: '#0d6efd', color: 'white', lineHeight : 8, padding: 15, fontSize : 18, textAlign: 'center' }}> 
    <th>ID</th>
    <th>Full Name</th>
    <th>Father Name</th>
    <th>Phone Number</th>
    <th>Age</th>
    <th>Address</th>
    <th>Email Address</th>
    <th>Password</th>
    <th>Update</th>
    <th>Delete</th>
   
  </thead>

  {readData.map((element) => {
    return(
      <>
      <tbody>
    <tr>
        <td>{element.id}</td>
        <td>{element.Name}</td>
        <td>{element.FatherName}</td>
        <td>{element.PhoneNumber}</td>
        <td>{element.Age}</td>
        <td>{element.Adsress}</td>
        <td>{element.Email}</td>
        <td>{element.Password}</td>
        <td>
        <Link to="/update"><button type="button" className="btn btn-success" onClick={() => {locallyStoreData(element.id,element.Name,element.FatherName,element.PhoneNumber,element.Age,element.Adsress,element.Email,element.Password)}}>Edit</button></Link></td>
        <td><button type="button" className="btn btn-danger" onClick={() => {deleteItem(element.id)}}>Delete</button>
        </td>
    </tr>
  </tbody>
      </>
    )
  })}
  
</table>


    </>
  )
}

export default Read
