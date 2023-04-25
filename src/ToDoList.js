import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ToDoList = () => {

  const [addFullName, setAddFullName] = useState("")
  const [addFatherNamr, setAddFatherName] = useState("")
  const [addPhoneNumber, setAddPhoneNumber] = useState("")
  const [addAge, setAddAge] = useState("")
  const [addAddress, setAddAddress] = useState("")
  const [addEmail, setAddEmail] = useState("")
  const [addPassword, setAddPassword] = useState("")


const history = useNavigate()

const submitButton = (e) => {
    e.preventDefault();
    console.log("you clicked me");
    axios.post(
      'https://643a3d76bd3623f1b9af6b4a.mockapi.io/crud-app',
      {
        Name: addFullName,
        FatherName: addFatherNamr,
        PhoneNumber: addPhoneNumber,
        Age: addAge,
        Adsress: addAddress,
        Email: addEmail,
        Password: addPassword,
      })
     
 .then(() => {
  history('/Read')
})
  }

  return (
    <>
    <h1  style={{backgroundColor: '#0d6efd',  color: 'black',  padding: 15,  textAlign: 'center' }}>Crud App</h1>
      <form>
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" onChange={(e) => setAddFullName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Father Name</label>
            <input type="text" className="form-control" onChange={(e) => setAddFatherName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" onChange={(e) => setAddPhoneNumber(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" onChange={(e) => setAddAge(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" onChange={(e) => setAddAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={(e) => setAddEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => setAddPassword(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary" onClick={submitButton}>Submit</button>
        </div>
      </form>

    </>
  )
}

export default ToDoList
