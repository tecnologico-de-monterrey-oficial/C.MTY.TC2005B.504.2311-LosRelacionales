import React, { useState } from "react";
import LineChart from "../chartComponents/LineChart";
import {UserData} from "../chart/Data";
import {Chart as ChartJS} from "chart.js/auto";

function Stats() {

const [userData, setUserData] = useState({
    labels: UserData.map((user) => user.year),
    datasets: [{
        label: "Users",
        data: UserData.map((user) => user.value),
    }]
});

const MyChart = new ChartJS(document.getElementById("Stats"), {
    type: "line",
    data: userData,
});

    return (
        <div className="stats">
            <h1>Stats</h1>
            <div className="chart">
                <LineChart chartData={userData} />
            </div>
        </div>
    );
    }

export default Stats;