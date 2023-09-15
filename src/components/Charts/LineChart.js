import React from "react";
import propTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { withTheme } from "styled-components";
import camelCaseToTitle from "../../config/util/index";

class renderLineChart extends React.Component {
  state = {
    updateXAxis: false,
  };

  componentWillUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ updateXAxis: !this.state.updateXAxis });
    }
  }
  renderLegend = (props) => {
    const { payload } = props;
    const COLORS = ["#6133FF", "#4BE5C0", "#F8604E", "#FF8042"];

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {payload
          .filter((item) => item.dataKey !== "name")

          // item => console.log(item.dataKey,"items"))

          .map((entry, index) => (
            <>
              <div
                style={{
                  borderRadius: 15,
                  width: 15,
                  height: 15,
                  backgroundColor:
                    entry.value === "UsersUpgrades" ? "#4BE5C0" : COLORS[index],
                  margin: 20,
                }}
              ></div>
              <p>{entry.value}</p>
            </>
            // key={`item-${index}`}>{entry.value}
          ))}
      </div>
    );
  };

  render() {
    var obj;
    if (this.props.data[0]) obj = Object.keys(this.props.data[0]);
    const COLORS = ["#6133FF", "#4BE5C0", "#F8604E", "#FF8042"];
    return (
      <div>
        {/* <LineChart width={this.props.width} height={this.props.height} data={this.props.data.length !== 0 ? this.props.data : [{ empty: 0 }]} margin={this.props.margin}> */}
        <LineChart
          width={this.props.width}
          height={this.props.height}
          data={this.props.data.length !== 0 ? this.props.data : [{ empty: 0 }]}
          margin={this.props.margin}
        >
          <XAxis dataKey="name" />
          <YAxis />
          {obj && !this.props.loading
            ? obj.map((value, index) => {
                //console.log("DETAILS", obj, value, index)
                return (
                  <Line
                    key={index.toString()}
                    type={this.props.lineType}
                    dataKey={obj[index]}
                    stroke={
                      this.props.lineColor
                        ? this.props.lineColor[index]
                        : this.props.theme[this.props.theme.mode].primary.main
                    }
                  />
                );
              })
            : null}
          {/* {this.props.isCartReq ? (
            <CartesianGrid
              dataKey={'basicUsers'}
              stroke={this.props.cartStroke}
              strokeDasharray={this.props.cartDash}
            />
          ) : null}
          

          {this.state.updateXAxis ? (
            <XAxis
              key={100}
              dataKey={obj && !this.props.loading ? obj[1] : null}
              allowDuplicatedCategory={false}
            />
          ) : (
            <XAxis
              key={200}
              dataKey={obj && !this.props.loading ? obj[1] : null}
              allowDuplicatedCategory={false}
            />
          )}
          <YAxis domain={[0, 50]} /> */}
          {this.props.isTooltip ? <Tooltip /> : null}
          <Legend
            verticalAlign="bottom"
            height={36}
            content={this.renderLegend}

            //        payload={
            // obj.filter(
            //   item => item !== "name"
            //   ).map((item,index)=>(
            //     {
            //        id: item,
            //     type: "circle",
            //     value: `${item}`,
            //     color: COLORS[index],
            //     // height:30,
            //     // width:30,
            //     }

            //    ) )
            // }
          />
        </LineChart>
      </div>
    );
  }
}

renderLineChart.defaultProps = {
  width: "100%",
  height: 300,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  lineType: "monotone",
  isCartReq: false,
  cartStroke: "#f0f0f0",
  cartDash: 5,
  isTooltip: true,
};

renderLineChart.propTypes = {
  data: propTypes.array.isRequired,
  lineColor: propTypes.array.isRequired,
};
export default withTheme(renderLineChart);
