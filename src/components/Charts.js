import {PieChart,Pie}from 'recharts'
export default function Charts() {
    
    const color=[
        {
         data:[
            {name:'Facebook', value:2000000000,fill:'#059669'},
            {name:'Instagram', value:1500000000,fill:'#B91C1C'},
            {name:'Twitter', value:1000000000,fill:'#6366F1'},
            {name:'Telegram', value:5000000000,fill:'#D97706'}
        ]
    }
    ]

    
    return(
        <>
        <div className="chart">
            <h1>Chart </h1> 
        </div>
       {color.map(s=>
            <PieChart width={1150} height={250}>
            <Pie data={s.data} dataKey={s.value} nameKey={s.name} cx="50%" cy="50%" outerRadius={120} label  />
    
            </PieChart>
        )
       }
        
        </>
    )
}