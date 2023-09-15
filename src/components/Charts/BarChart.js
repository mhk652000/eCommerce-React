import React from "react";
import propTypes from "prop-types";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

import AccountingFormat from "../../config/util/index";

// For Testing Chart: Pass data array into data as a prop, put value as dataKey, put name as nameKey
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ];

class BarChartWrapper extends React.PureComponent {
  // renderLegend = (props) => {
  //   const { payload } = props;

  //   return (
  //     <ul>
  //       {
  //         payload.map((entry, index) => (
  //           <li key={`item-${index}`} style={{
  //             margin: '0 0 0 10px'
  //             }}>{entry.value}</li>
  //         ))
  //       }
  //     </ul>
  //   );
  // }
  render() {
    var obj, numId;
    if (this.props.data[0]) obj = Object.keys(this.props.data[0]);

    return (
        <BarChart 
        style={{ margin: "auto" }} 
        margin={this.props.margin}
        width={this.props.width} height={this.props.height} data={this.props.data} layout="vertical">
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis type="number" tick={false}/>
            <YAxis type="category" dataKey={obj[0]} />
            <Tooltip
            // wrapperStyle={{
            //   color: "white"
            // }} 
            // itemStyle={{
            //   color: "white"
            // }}
            // contentStyle={{
            //   borderRadius: 5,
            //   border: "none",
            //   backgroundColor: "#0f869e",
            //   color: "white"
            // }}
            content={({ active, payload, label }) => {
              if (active) {
                console.log("TOOLTIP", payload, label)
                return (
                  <div className="custom-tooltip" style={{
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "space-between",
                    // flexWrap: "nowrap",
                    borderRadius: 5,
                    border: "none",
                    padding: 10,
                    backgroundColor: "#0f869e",
                    color: "white",
                    minWidth: "10rem",
                    maxWidth: "30rem",
                    // height: 80,
                    // transform: "translate(-50%, -20px)"
                  }}>
                    <p className="label mr-b">{label}</p>
                    {/* <br /> */}
                    <p className="label mr-b">{payload[0].name}:&nbsp;<span style={{ wordBreak: "normal" }}>{AccountingFormat(payload[0].value, payload[0].payload.label[0])}</span></p>
                    {/* <br /> */}
                    <p className="label">{payload[1].name}:&nbsp;<span style={{ wordBreak: "normal" }}>{AccountingFormat(payload[1].value, payload[0].payload.label[0])}</span></p>
                    {/* <p className="intro">{getIntroOfPage(label)}</p> */}
                  </div>
                );
            }}}
            />
            {/* <Legend /> */}
            <Bar dataKey={obj[1]} fill={this.props.barColor[0] || "#8884d8"} />
            <Bar dataKey={obj[2]} fill={this.props.barColor[1] || "#82ca9d"} />
        </BarChart>
    );
  }
}

BarChartWrapper.defaultProps = {
  width: 400,
  height: 300,
  margin: { top: 0, right: 50, left: 50, bottom: 0 },
  isTooltip: true,
  isLegend: false,
  size: null,
  label: true,
  legendType: "circle"
};

BarChartWrapper.propTypes = {
  data: propTypes.array.isRequired,
  pieColor: propTypes.array.isRequired
};

export default BarChartWrapper;
