import React, { useState,useEffect } from 'react';
import axios from 'axios';

 export default function Constants(){
  const [charts,setCharts]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/charts").then(
      charts => setCharts(charts.data)
    ).catch(
      err => console.log(err) 
    )
    // const fetchCharts=async()=>{
    //   const response=await fetch('http://localhost:5000/charts')
    //   const json= await response.json()
    //   if(response.ok){
    //     setCharts(json)
    //   }
    // }
    // fetchCharts()
  }, [])
  
  return(
    <>
    <div className="workouts">
    <table className="table text-center offset-1 border"  style={{marginTop : "50px" , width: "80%"}}>
    <thead className="table-dark" >
        <tr>
            <th>Name</th>
            <th>Value</th>
        </tr>
    </thead>
      <tbody className="table-light">
        {
          charts.map(chart => {
            return <tr key={chart.name}>
              <td>{chart.name}</td>
              <td>{chart.value}</td>
            </tr>
          })
        }
      </tbody>
    </table>
     
    </div>
    </>
  )
}
// import React, {useEffect } from 'react';
// import axios from 'axios';

// export default function Constants(){
// useEffect(()=>{
//   axios.get("http://localhost:5000/charts")
//   .then(
//           res=>console.log(res)
//         ).catch(
//           err => console.log(err) 
//         )
// },[])
//  return(
//   <div>FetchData</div>
//  )
// }

