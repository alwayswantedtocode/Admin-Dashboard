import React from "react";
import PropTypes from "prop-types";
import { Line, LineChart, ResponsiveContainer,Tooltip } from "recharts";
import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";


const ChartBox = (props) => {

  return (
    <div className="flex  ">
      <div className="w-max  flex flex-col flex-3 justify-between gap-[20px] ">
        <div className="w-max flex flex-col gap-[10px]">
          <div className="w-max h-max ">
            <img
              src={Logo}
              alt="logo"
              className="w-[2.5rem] h-[1.5rem] cover"
            />
          </div>
          <span className="font-bold ">
            {props.title}
          </span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-bold text-2xl">{props.number}</h1>
          <Link to={""} style={{ color: props.color }}>
            View all
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col ">
        <div className=" " style={{ width: "100%", height: "80px" }}>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props?.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col">
          <span
            className="flex justify-end"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="flex justify-end">this month</span>
        </div>
      </div>
    </div>
  );
};

ChartBox.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChartBox;
