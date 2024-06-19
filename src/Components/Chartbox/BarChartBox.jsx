import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
  return (
    <div>
      <div className="font-bold">
        <h1>{props.title}</h1>
      </div>
      <div className="w-[100%] h-[100px]">
        {" "}
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
BarChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, 
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BarChartBox;
