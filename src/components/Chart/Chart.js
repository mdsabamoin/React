import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";
const Chart = (props)=>{
    const arrayformax = props.chartExpenses.map((item)=>{
        return item.price;
    })
    const maxvalue = Math.max(...arrayformax)
    const chartData = [
        {expenseMonth:"Jan" , expenseValue: 0},
        {expenseMonth:"Feb" , expenseValue: 0},
        {expenseMonth:"Mar" , expenseValue: 0},
        {expenseMonth:"Apr" , expenseValue: 0},
        {expenseMonth:"May" , expenseValue: 0},
        {expenseMonth:"Jun" , expenseValue: 0},
        {expenseMonth:"Jul" , expenseValue: 0},
        {expenseMonth:"Aug" , expenseValue: 0},
        {expenseMonth:"Sep" , expenseValue: 0},
        {expenseMonth:"Oct" , expenseValue: 0},
        {expenseMonth:"Nov" , expenseValue: 0},
        {expenseMonth:"Dec" , expenseValue: 0}
    ];
    for(let expense of props.chartExpenses){
        chartData[expense.date.getMonth()].expenseValue += expense.price;
    }
    return (
        <div className="chart">
            {chartData.map((item)=>{
                return <ChartBar key={item.expenseMonth}
                 label={item.expenseMonth} 
                 value={item.expenseValue}
                 maxvalue={maxvalue}/>
            })}
        </div>
    )
}
export default Chart;