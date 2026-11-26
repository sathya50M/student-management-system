import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { deleteStudent, getStudents } from '../StudentService';
import { useNavigate } from 'react-router-dom';

const DisplayStudents = () => {

  let [students,setStudents] = useState([]);

  const navigate = useNavigate()

  let fetchData = async () =>{
    try{
      let data = await getStudents();
      setStudents(data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  let handelDelete = async (id) =>{
    try{
      await deleteStudent(id);
      let data = await getStudents();
      setStudents(data); 
    }
    catch(err){
      console.log(err);
    }
  }
  let handelEdit = (id) =>{
    navigate(`/EditStudent/${id}`)
  }

  return (
    <>
      <div className='displayStudents'>
        <h1>Students Details</h1>
        <table border = {1}>
          <thead>
            <tr>
              <td>sid</td>
              <td>sname</td>
              <td>semail</td>
              <td>dept</td>
              <td>phNo</td>
              <td>update</td>
              <td>delete</td>
            </tr>
          </thead>
            <tbody>
              {
                students.map((students)=>{
                  return <tr key={students.id}>
                    <td>{students.sid}</td>
                    <td>{students.sname}</td>
                    <td>{students.semail}</td>
                    <td>{students.dept}</td>
                    <td>{students.phNo}</td>
                    <td><button onClick={()=>handelEdit(students.id)}>Edit</button></td>
                    <td><button onClick={()=>handelDelete(students.id)}>Delete</button></td>
                  </tr>
                })
              }
            </tbody>
        </table>
      </div>
    </>
  )
}

export default DisplayStudents