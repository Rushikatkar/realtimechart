import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import axios from 'axios';


function randomNum() {
    return Math.floor(Math.random() * 90) + 1;
}

function generateNewdata(){
   return [
        { name: 'Facebook', value: randomNum(), fill: '#059669' },
        { name: 'Instagram', value: randomNum(), fill: '#B91C1C' },
        { name: 'Twitter', value: randomNum(), fill: '#6366F1' },
        { name: 'Telegram', value: randomNum(), fill: '#D97706' }
    ]
}


export default function Charts() {
    const [data, setData] = useState([
        { name: 'Facebook', value: 0, fill: '#059669' },
        { name: 'Instagram', value: 0, fill: '#B91C1C' },
        { name: 'Twitter', value: 0, fill: '#6366F1' },
        { name: 'Telegram', value: 0, fill: '#D97706' }
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newData = generateNewdata();
          setData(newData);
    
          console.log(setData);
    
          axios.post("http://localhost:5000/api/sendrealchart", newData);
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newData = data.map(entry => ({
    //             ...entry,
    //             value: randomNum()
    //         }));
    //         setData(newData);
    //         axios.post('http://localhost:5000/api/sendrealchart',newData);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [data]);

    return (
        <div className="chart">
            <h1>Chart</h1>
            <PieChart width={550} height={350}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label />
                <Tooltip />
            </PieChart>
        </div>
    );
}
