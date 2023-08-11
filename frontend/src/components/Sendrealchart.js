import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Constants() {
  const [charts, setCharts] = useState([]);

  const fetchCharts = () => {
    axios.get("http://localhost:5000/api/sendrealchart")
      .then(res => setCharts(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    // Fetch data immediately
    fetchCharts();

    // Set up a timer to refresh the data every 5 seconds
    const intervalId = setInterval(fetchCharts, 5000);

    // Clear the timer when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="workouts">
        <table className="table text-center offset-1 border" style={{ marginTop: "50px", width: "80%" }}>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {charts.map(chart => (
              <tr key={chart.name}>
                <td>{chart.name}</td>
                <td>{chart.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
