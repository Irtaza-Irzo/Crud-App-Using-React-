import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [id, setId] = useState(0)
  const [addFullName, setName] = useState("")
  const [addFatherNamr, setFatherName] = useState("")
  const [addPhoneNumber, setPhone] = useState("")
  const [addAge, setAge] = useState("")
  const [addAddress, setAddress] = useState("")
  const [addEmail, setEmail] = useState("")
  const [addPassword, setPassword] = useState("")

  useEffect(
    () => {
      setId(localStorage.getItem('id'))
      setName(localStorage.getItem('name'))
      setFatherName(localStorage.getItem('FatherName'))
      setPhone(localStorage.getItem('Contact'))
      setAge(localStorage.getItem('Age'))
      setAddress(localStorage.getItem('Address'))
      setEmail(localStorage.getItem('email'))
      setPassword(localStorage.getItem('Password'))

    },[]
  )
  const Navigate = useNavigate()
  const updateItems = (e) => {
    e.preventDefault();

    axios.put(`https://643a3d76bd3623f1b9af6b4a.mockapi.io/crud-app/${id}`,
      {

        name: addFullName,
        FatherName: addFatherNamr,
        Contact: addPhoneNumber,
        Age: addAge,
        Address: addAddress,
        email: addEmail,
        Password: addPassword,
      })
      .then(() => {
        Navigate('/read')
      })
  }
  return (
    <>
      <form>
        <div className="container">
          <h1   style={{ backgroundColor: '#0d6efd', color: 'black',  padding: 15,  textAlign: 'center' }}>Update The Data Here</h1>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} value={addFullName} />
          </div>
          <div className="mb-3">
            <label className="form-label">Father Name</label>
            <input type="text" className="form-control" onChange={(e) => { setFatherName(e.target.value) }} value={addFatherNamr} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" onChange={(e) => { setPhone(e.target.value) }} value={addPhoneNumber} />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" onChange={(e) => { setAge(e.target.value) }} value={addAge} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} value={addAddress} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={addEmail} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value) }} value={addPhoneNumber} />
          </div>

          <button type="submit" className="btn btn-primary" onClick={updateItems}>Update</button>
        </div>
      </form>
    </>
  )
}

export default Update
