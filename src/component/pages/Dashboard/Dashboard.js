import React from "react";
import classes from "../Dashboard/Dashboard.module.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import ImageName from "../../../Assets/imggg.jpg";

// import BarChart from "react-bar-chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Chart from "react-apexcharts";

import { useState } from "react";

const Dashboard = () => {
  const [currentFruit, setCurrentFruit] = useState("");

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit);
  };
  const cardData = [
    {
      source: "Earning",
      balance: "$198k",
      target_Income: "37.8% this month",
      styleCss: {
        backgroundColor: "#e39090",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        marginTop: "20px",
        paddingTop: "40px",
      },
    },
    {
      source: "Balance",
      balance: "$2.4k",
      target_Income: "2% this week",
      styleCss: {
        backgroundColor: "#97e47a",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        marginTop: "20px",
        paddingTop: "40px",
      },
    },
    {
      source: "Balance",
      balance: "$2.4k",
      target_Income: "2% this week",
      styleCss: {
        backgroundColor: "#eeee85",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        marginTop: "20px",
        paddingTop: "40px",
      },
    },
    {
      source: "Total Seats",
      balance: "$89k",
      target_Income: "11% this week",
      styleCss: {
        backgroundColor: "rgb(241 140 225)",
        borderRadius: "50%",
        height: "100px",
        width: "100px",
        marginTop: "20px",
        paddingTop: "40px",
      },
    },
  ];
  const data = [
    { name: "Jan", value: 400, color: "blue" },
    { name: "Feb", value: 340, color: "green" },
    { name: "Mar", value: 500, color: "red" },
    { name: "Apr", value: 440, color: "purple" },
    { name: "May", value: 460, color: "green" },
    { name: "Jun", value: 150, color: "red" },
    { name: "July", value: 300, color: "purple" },
    { name: "Aug", value: 370, color: "green" },
    { name: "Sep", value: 450, color: "red" },
    { name: "Oct", value: 400, color: "purple" },
    { name: "Nov", value: 320, color: "red" },
    { name: "Dec", value: 350, color: "purple" },
  ];

  const options = {
    series: [40, 30, 15, 15],
    labels: ["Apple", "Mango", "Lemon", "Banana"],
  };

  return (
    <div>
      <div className={classes.DashboardHeader}>
        <div>
          <h3>Hi, Ajay</h3>
        </div>
        <div>
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className={classes.cardContainer}>
        {cardData.map((elem, index) => (
          <div className={classes.card} key={index}>
            {console.log("elem", elem.styleCss)}

            <div className={classes.container}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={elem.styleCss}>
                  <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div>
                  <p
                    style={{
                      marginBottom: "0rem",
                      marginTop: "30px",
                      fontSize: "14px",
                    }}
                  >
                    {elem.source}
                  </p>
                  <p style={{ marginBottom: "0rem" }}>{elem.balance}</p>
                  <p style={{ marginBottom: "0rem", fontSize: "14px" }}>
                    {elem.target_Income}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Row>
        <Col md={8} className={classes.cardContainer}>
          <div className={classes.card1}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  OverView
                </p>
                <p style={{ fontSize: "14px", marginLeft: "10px" }}>
                  Monthly Earning
                </p>
              </div>
              <div>
                <form>
                  <select
                    style={{ marginTop: "10px", marginRight: "10px" }}
                    onChange={(event) => changeFruit(event.target.value)}
                    value={currentFruit}
                  >
                    <option value="apples">Quarterly</option>
                    <option value="oranges">Jan</option>
                    <option value="tomatoes">March</option>
                    <option value="bananas">Jun</option>
                    <option value="tomatoes">Sep</option>
                    <option value="bananas">Dec</option>
                  </select>
                </form>
              </div>
            </div>
            <BarChart data={data} width={700} height={200}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />

              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className={classes.card1}>
              <p
                style={{
                  marginBottom: "0px",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Customers
              </p>
              <p style={{ fontSize: "14px" }}>Customers that buy products</p>
              <div id="pieChart">
                <Chart
                  options={options}
                  series={options.series}
                  type="pie"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={classes.card2}>
          <div className={classes.DashboardHeader}>
            <div>
              <h3>Product Sell</h3>
            </div>
            <div>
              <div className={classes.SearchSelect}>
                <div style={{ marginRight: "54px", marginTop: "10px" }}>
                  <input type="text" placeholder="search" />
                </div>
                <div>
                  <form>
                    <select
                      style={{ marginTop: "10px", marginRight: "10px" }}
                      onChange={(event) => changeFruit(event.target.value)}
                      value={currentFruit}
                    >
                      <option value="apples">Quarterly</option>
                      <option value="oranges">Jan</option>
                      <option value="tomatoes">March</option>
                      <option value="bananas">Jun</option>
                      <option value="tomatoes">Sep</option>
                      <option value="bananas">Dec</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.DashboardHeader}>
            <div>
              <p>Product Name</p>
            </div>
            <div>
              <div className={classes.SearchSelect}>
                <div style={{ marginRight: "54px", marginTop: "10px" }}>
                  <p>Stack</p>
                </div>
                <div>
                  <p style={{ marginRight: "54px", marginTop: "10px" }}>
                    Price
                  </p>
                </div>
                <div>
                  <p style={{ marginRight: "54px", marginTop: "10px" }}>
                    Total Scores
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.DashboardHeader}>
            <div>
              <div style={{display:'flex'}}>
<div>
<img src={ImageName} alt="" style={{height:'50px',width:'80px',marginRight:'15px',borderRadius:'10px'}} />

</div>
<div>
<span>Abstract 3D</span>
<br />
<span>Lorem ipsum dolor</span>

</div>
              </div>
            </div>
            <div>
              <div className={classes.SearchSelect}>
                <div style={{ marginRight: "54px" }}>
                  <p> 32 in Stack</p>
                </div>
                <div>
                  <p style={{ marginRight: "54px" }}>$ 45.99</p>
                </div>
                <div>
                  <p style={{ marginRight: "54px" }}>20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
