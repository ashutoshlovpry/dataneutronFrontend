import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GetAllCountsComponent from './count';

const Add = () => {
  const [formData, setFormData] = useState({
    'name': '',
    'email': ''
  })
  const [isEdit, setIsEdit] = useState(false)
  const [userId, setUserId] = useState('')
  const [userList, setUserList] = useState([])
  const [addData, SetAddData] = useState([])
  const [updateData,setUpdatedata]=useState([])
  const handleSubmit = async (e) => {
    var email = formData.email.trim();

    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/create-user`, formData)//execution time 26ms
      .then(response => {
        SetAddData(response.data)
        console.log('Server response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


  }
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users`) //execution time 21 ms
      .then(response => {
        setUserList(response.data)
        console.log('Server response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [addData,updateData])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update only the specific field in formData using spread syntax
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const editData = (data) => {
    setFormData({ name: data.name, email: data.email })
    setIsEdit(true)
    setUserId(data._id)

  }
  const update = () => {
    axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/update-user/${userId}`, formData)//execution time 27ms
      .then(response => {
        setUpdatedata(response.data)
        // Handle success, e.g., show a success message or redirect to another page
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Handle error, e.g., show an error message to the user
      });
  }
  return (
    <>
      <div class="form-group col-md-6">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" required value={formData.email} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
          onChange={handleInputChange} />
      </div>
      <div class="form-group col-md-6">
        <label >Name</label>
        <input name='name' value={formData.name} required class="form-control" id="name" placeholder="Name"
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary" onClick={isEdit ? update : handleSubmit}>{isEdit ? 'Update user' : 'Add user'}</button>
      <br />
      <ul className="list-group col-md-6">
        {userList && userList.map((user, index) => {
          return (<>
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Name:</strong> {user.name}
                <br />
                <strong>Email:</strong> {user.email}
              </div>
              <button className="btn btn-outline-primary btn-sm" onClick={() => editData(user)}>edit</button>
            </li>
          </>)
        })}
      </ul>
      <br />
      <GetAllCountsComponent addData={addData} updateData={updateData} />
    </>
  );
};

export default Add;