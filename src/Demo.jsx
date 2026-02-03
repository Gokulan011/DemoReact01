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
  return (
    <div>

    <div>
    <label htmlFor="">NAME :</label><br />
    <input onChange={event=>setName(event.target.value)} type="text" /> <br />


    <label htmlFor="">CheckBox :</label>
    <input onChange={(event)=>{setCheck(event.target.checked)}} type="checkbox" /> <br />

     <button onClick={postData}>SUBMIT</button>

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

</div>


    </div>
  )
}
