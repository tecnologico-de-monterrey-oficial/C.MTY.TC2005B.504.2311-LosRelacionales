import React, { useState } from "react";
import LineChart from "C:/Users/fer24/Documents/ConstruccionDeSoftware/C.MTY.TC2005B.504.2311-LosRelacionales/los-relacionales/src/components/Chart/ChartComponents/LineChart.jsx";
import {Chart as ChartJS} from "chart.js/auto";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetchPamTestByPamIdQuery } from "../../store";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CategoryScale } from "chart.js/auto";


function Stats() {

ChartJS.register(CategoryScale);
const navigate = useNavigate();
const pamId = useSelector((state) => state.person.pam_id);
const [pamTestArray, setPamTestArray] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const pamTestReq = Axios.get(`http://10.14.255.53:3010/get-pam-test-by-pam/${pamId}`);      
            const pamTestResp = await pamTestReq;
            console.log(pamTestResp.data.pam_tests);
            setPamTestArray(pamTestResp.data.pam_tests);
        } catch (error) {
            console.error('Error fetching data:', error);
          }
      };
    
      fetchData();

  }, []);
  console.log(pamId);
  console.log ("pamtest",pamTestArray);

  let dataArray = [];


  pamTestArray.forEach((element) => {
    dataArray.push({x: element.test_date.substring(0, 10), y: element.test_result});
    });

    console.log(dataArray);
  //console.log(pamId);
  //console.log(pamTestArray[0].test_date.substring(0, 10));

// const [userData, setUserData] = useState({
//     labels: pamTestArray.map((user) => user.test_date.toString().substring(0, 10)),
//     datasets: [{
//         label: "Resultados de pruebas",
//         data: pamTestArray.map((user) => parseInt(user.test_result)),
//     }]
// });

const [userData, setUserData] = useState({
    labels: ["2023-06-17","2023-06-17","2023-06-17"],
    datasets: [{
        label: "Resultados de pruebas",
        data: [9,3,14],
    }]
});


const handleExit = () => {
    MyChart.destroy();
    navigate("/profile");
}

const MyChart = new ChartJS(document.getElementById("Stats"), {
    type: "line",
    data: userData,
});

    return (
        <div className="stats">
            <h1>Stats</h1>
            <div className="chart">
                <LineChart chartData={userData} />
                <Button variant="primary" size="lg" onClick={() => handleExit()}>
                Regresar
            </Button>
            </div>
        </div>
    );
    }

export default Stats;