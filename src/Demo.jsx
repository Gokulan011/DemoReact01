import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

export default function Demo() {

const[Name,setName]=useState("");
const[Check,setCheck]=useState(false);


const postData =async()=>{
    try{
        await axios.post(`https://698075bd6570ee87d50f4cc4.mockapi.io/test`,
            {
                name:Name,
                checked: Check,
            });
            console.log(Name)
      
    }
    catch{
          
          console.error("Error posting data:", error.message);
          alert("Failed to add data.");
    }
}

    //   Get Data

 const [TotalData,setTotalData]=useState([])
 const getdata = async() => {
 try {
     const response = await axios.get(`https://698075bd6570ee87d50f4cc4.mockapi.io/test`)
     setTotalData(response.data);
 } catch (error) {
     console.error("Error posting data:", error.message);
     alert("Failed to add data.");
 }
};
 useEffect(() => {
     getdata()
 }, [])

    // Delete

 const deleteuser=async(id)=>{
    try{
        await axios.delete(`https://698075bd6570ee87d50f4cc4.mockapi.io/test/${id}`);
        getdata();
    }
    catch (error) {
          console.error("Error deleting user:", error.message);
          alert("Failed to delete user.");
        }
 };
        // Update

 const [updatename,setupdateName]=useState('')
 const [updatestatus,setupdatestatus]=useState(false)

 const updateuser = async(id) =>{
    try{
        await axios.put(`https://698075bd6570ee87d50f4cc4.mockapi.io/test/${id}`,{
            name:updatename,
            checked:updatestatus,
        });
        getdata();
    }
     catch (error) {
          console.error("Error updating user:", error.message);
          alert("Failed to update user.");
        }
 };
  return (
    <div>

    <div>
    <label htmlFor="">NAME :</label><br />
    <input onChange={event=>setName(event.target.value)} type="text" /> <br />


    <label htmlFor="">CheckBox :</label>
    <input onChange={(event)=>{setCheck(event.target.checked)}} type="checkbox" /> <br />

     <button onClick={postData}>SUBMIT</button>
 </div>
     <table>
        <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Delete</td>
            <td>Update</td>
        </tr>
        {TotalData.map(item => (
            <tr key={item.id}><td>{item.name}</td> 
            <td><input type="checkbox" checked={item.checked} /></td>
            <td><button id={item.id} onClick={(e) => deleteuser(e.target.id)}>Delete</button></td>
            <td><button id={item.id} onClick={(e) => updateuser(e.target.id)}>Update</button></td>
            </tr> 
        ))}
        </table> 

 <h1>UPDATE OPERATION</h1>
    <div>
        <label >Name</label> <br />
        <input type="text" onChange={event => setupdateName(event.target.value)} /> <br />
        <input type="checkbox" onChange={(e)=>setupdatestatus(e.target.checked)} />
    </div>
    </div>
  )
}
