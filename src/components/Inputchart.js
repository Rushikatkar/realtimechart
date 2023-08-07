import React,{useEffect, useState} from 'react';

export default function Inputchart(){

    const [user,setUser]=useState({
            name:"", value:""
    });
    let name, value;
    const PostData=async(e)=>{
        e.preventDefault();
        const res=await fetch("/api/chart",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, value
            })
        });
        const data=await res.json();
        if(data.status===422|| !data){
            window.alert("Invalid data");
            console.log("Invalid data")
        }else{
            window.alert("Data Submitted successful");
        }
    }
    useEffect(()=>{
        PostData();
    },);

    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,name:user.name,value:user.value});
    }

    

    return(
        <>
        <div className="area-in">
            <div className="info-in">
                <h2>Enter information to view Pie chart of you information</h2>
                <h3>For example:- </h3>
                <h3>Enter the Application name and their users like</h3>
                <h3> name: Instagram</h3>
                <h3>number:2000000000</h3>
            </div>
             <form action="" method="post">
                    <div className="table-in">
                        <table>
                                <tr>
                                <th>Name</th>
                                <th>Value</th>
                                </tr>
                                <tr>
                                <td><input type="text" value={user.name} onChange={handleInputs}/></td>
                                <td><input type="number"value={user.number} onChange={handleInputs}/></td>
                                </tr> 
                                {/* <tr>
                                <td><input type="text"value={user.name} onChange={handleInputs}/></td>
                                <td><input type="number"value={user.number} onChange={handleInputs}/></td>
                                </tr> <tr>
                                <td><input type="text"value={user.name} onChange={handleInputs}/></td>
                                <td><input type="number"value={user.number} onChange={handleInputs}/></td>
                                </tr> <tr>
                                <td><input type="text"value={user.name} onChange={handleInputs}/></td>
                                <td><input type="number"value={user.number} onChange={handleInputs}/></td>
                                </tr>                      */}
                        </table>
                        <input type="submit" value="View" onClick={PostData} />
                    </div>
                 </form>    
        </div>
        </>
    )
}