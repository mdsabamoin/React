import React from "react";
import Chart from "../Chart/Chart.js"

const ExpensesChart = (props) =>{
    return (<div>
        <Chart chartExpenses={props.chartData}/>
    </div>)
}

export default ExpensesChart;