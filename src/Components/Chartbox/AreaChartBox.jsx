import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const AreaChartData = [
  {
    name: "Sun",
    kitchenUtensils: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    kitchenUtensils: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    kitchenUtensils: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    kitchenUtensils: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    kitchenUtensils: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    kitchenUtensils: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    kitchenUtensils: 3490,
    clothes: 4300,
    electronic: 2100,
  },
];

const AreaChartBox = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-between">
      <h1 className="text-3xl font-bold">Revenue Analytics</h1>
      <div className="w-[100%] h-[300px]">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={AreaChartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="kitchenUtensils"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
