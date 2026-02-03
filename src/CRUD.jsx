import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function CRUD() {

    // CREATE OPERATION //


    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Check, setCheck] = useState(false);

    const postData = async () => {
        try {
          await axios.post(`https://683ed33d1cd60dca33dd3bdd.mockapi.io/test`,
          {
            name: Name,
            phone: Phone,
            email: Email,
            checked: Check,
          });
          getdata();
        } 
         
        catch (error) {
          console.error("Error posting data:", error.message);
          alert("Failed to add data.");
        }
      };
      


    // GET OPERATION //

    const [TotalData, setTotalData] = useState([])

    const getdata = async () => {
        try {
          const response = await axios.get('https://683ed33d1cd60dca33dd3bdd.mockapi.io/test');
          setTotalData(response.data);
        } 
        
        catch (error) {
          console.error("Error fetching data:", error.message);
          alert("Failed to fetch data.");
        }
      };
      

    useEffect(() => {
        getdata()
    }, [])


    //   DELETE OPERTAION   //

    const deleteuser = async (id) => {
        try {
          await axios.delete(`https://683ed33d1cd60dca33dd3bdd.mockapi.io/test/${id}`);
          getdata();
        } 
        
        catch (error) {
          console.error("Error deleting user:", error.message);
          alert("Failed to delete user.");
        }
      };
      


    //   UPDATE OPERATION  //


    const [updatename,setupdateName]=useState('')
    const [updatephone,setupdatePhone]=useState('')
    const[updatestatus,setupdatestatus]=useState(false)

    const updateuser = async (id) => {
        try {
          await axios.put(`https://683ed33d1cd60dca33dd3bdd.mockapi.io/test/${id}`, {
            name: updatename,
            phone: updatephone,
            checked: updatestatus,
          });
          getdata();
        } 
        
        
        catch (error) {
          console.error("Error updating user:", error.message);
          alert("Failed to update user.");
        }
      };
      


    return (


        //  CREATE OPERATION  //

        <div>

            <h1>CREATE DATA</h1>

            <div className='main'>

                <label>Name:</label><br />
                <input onChange={event => setName(event.target.value)}
                    type="text" /><br /><br />



                <label>Phone:</label><br />
                <input onChange={event => setPhone(event.target.value)}
                    type="text" /><br /><br />


   
                <label>Email:</label><br />
                <input onChange={event => setEmail(event.target.value)}
                    type="text" /><br /><br />

                <input onChange={(e) => { setCheck(e.target.checked) }}
                    type="checkbox" /><br />

                <button onClick={postData}>Submit</button>

            </div>


            <h1>READ DATA</h1>

            {/* GET OPERATION  */}
            <table>

                <tr><td>NAME</td>  
                    <td>PHONE</td>
                    <td>EMAIL</td>
                    <td>STATUS</td>
                    <td>DELETE</td>
                    <td>UPDATE</td></tr>

                {TotalData.map(item => (

                    <tr key={item.id}><td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td><input type="checkbox" checked={item.checked} /></td> 


                        {/* DELETE OPERATION BUTTON  */}

                        <td><button id={item.id} onClick={(e) => deleteuser(e.target.id)}>Delete</button></td>

                        {/* UPDATE OPERATION BUTTON  */}
                        
                        <td><button id={item.id} onClick={(e) => updateuser(e.target.id)}>Update</button></td></tr>

                ))}
            </table>


<h1>UPDATE OPERATION</h1>

            {/* UPDATE OPERATION INPUT VALUES */}


            <div>

                <label>Name:</label><br />
                <input onChange={event => setupdateName(event.target.value)}
                    type="text" /><br /><br />



                <label>Phone:</label><br />
                <input onChange={event => setupdatePhone(event.target.value)}
                type="text" /><br /><br />

                <input type="checkbox" onChange={(e)=>setupdatestatus(e.target.checked)} />


            </div>

        </div>
    )
} 
