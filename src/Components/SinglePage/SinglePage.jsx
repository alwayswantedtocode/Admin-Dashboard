import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SinglePage = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-[20px]">
      <div className="flex-1">
        <div className="">
          <div className="flex items-center gap-[20px] ">
            <div className="w-max h-[100%] ">
              {props.img && (
                <img
                  src={props.img}
                  alt=""
                  className="w-[100px] h-[100px] rounded-[0.5rem] object-cover"
                />
              )}
            </div>
            <div className="border-2 border-yellow-500">
              <h1 className="font-bold">{props.title}</h1>
            </div>

            <button>Update</button>
          </div>
          <div className="text-[18px]">
            {Object.entries(props.info).map((item) => (
              <div className="my-[30px]" key={item[0]}>
                <span className="font-bold mr-[10px] capitalize">
                  {item[0]}
                </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[80%] h-[0px] border-gray-300 m-[20px]" />
        {props.chart && (
          <div className="mt-[50px] w-[80%] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="mb-[20px]">Latest Activities</h2>
        {props.activities && (
          <ul className="">
            {props.activities.map((activity) => (
              <li
                className=" w-[1px] relative list-none pt-[5px] bg-[#f45b69] custom-li"
                key={activity.text}
              >
                <div className="w-[480px] p-[15px] bg-[#fa4c5b10]">
                  <p className="mb-[5px]">{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
