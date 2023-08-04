import React from 'react';
import {PieChart,Pie}from 'recharts'
export default function Charts() {
const data=[
    {name:'Facebook', value:2000000000},
    {name:'Instagram', value:1500000000},
    {name:'Twitter', value:1000000000},
    {name:'Telegram', value:5000000000}


]
    
    return(
        <>
        <div className="chart">
            <h1>Chart </h1>
            <PieChart width={250} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" />
            </PieChart>
        </div>
        </>
    )
}