import React, { useState } from 'react';
import axios from 'axios';
export default function Inputchart(){
    const [formData, setFormData] = useState({ name: '', value: '' });

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/api/chartsend', formData);
        console.log('Data sent:', response.data);
        // Reset the form after successful submission
        setFormData({ name: '', value: '' });
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    

    

    return(
        <>
        <div className="area-in">
            <div className="info-in">
                <h2>Enter information to view Pie chart of you information</h2>
                <br />
                <h3>For example:- </h3>
                <h3 className='purpletxt'>Enter the Application name and their users like</h3>
                <h3> name: Instagram</h3>
                <h3>value: 200</h3>
            </div>
             <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="table-in">
                        <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr>
                                <tr>
                                    <td><input type="text" name="name"
                                             value={formData.name}
                                             onChange={handleChange} />
                                    </td>
                                    <td><input type="text" name="value"
                                        value={formData.value}
                                        onChange={handleChange}/>
                                    </td>
                                </tr> 
                                {/* <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr>  
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr> 
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr>                   */}
                        </table>
                        <button type="submit" class="btn-submit">Submit</button>
                    </div>
                 </form>    
        </div>
        </>
    )
}