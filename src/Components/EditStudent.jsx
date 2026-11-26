import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getStudentsById, updateStudent } from '../StudentService';


const EditStudent = () => {

    let[student ,setStudent] = useState({
        sname : "",
        sid : "",
        semail : "",
        phNo : "",
        dept : ""
    })

    let { sname, sid, semail, phNo, dept}=student;

    const {id} = useParams()

    let fetchStudent = async () =>{
      try{
        let data = await getStudentsById(id)
        setStudent(data)
      }
      catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
      fetchStudent()
    },[id])

    let handleChange = (e) =>{
        let {value , name} = e.target
        setStudent({...student,[name]:value})
    }

    let handelSubmit = async (e) =>{
        e.preventDefault();

        try{
            
            if(!sname || !sid || !semail || !phNo || !dept){
                return alert("Fill all the input items");
            }
            console.log(student);

            await updateStudent(id,student);

            alert("Registered successfully");

            setStudent({
                sname : "" ,
                sid : "",
                semail : "",
                phNo : "",
                dept : ""
            })

        }
        catch(err){
            console.log(err);
        }
        
    }

  return (
    <div className='addStudent'>
        <form action="" onSubmit={handelSubmit}>
            <input type="text" placeholder='Enter your name' value={sname} onChange={handleChange} name='sname'/>
            <input type="text" placeholder='Enter your id ' value={sid} onChange={handleChange} name='sid'/>
            <input type="text" placeholder='Enter your email id' value={semail} onChange={handleChange} name='semail'/>
            <input type="text" placeholder='Enter your phone number'value={phNo} onChange={handleChange} name='phNo'/>
            <input type="text" placeholder='Enter your department'value={dept} onChange={handleChange} name='dept'/>
                <button>Update</button>
        </form>
    </div>
  )
}
export default EditStudent
