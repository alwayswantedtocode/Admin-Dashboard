import React from "react";
import Topdeals from "../../../Components/Top Deals/Topdeals";
import ChartBox from "../../../Components/Chartbox/chartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../../Components/data";
import BarChartBox from "../../../Components/Chartbox/BarChartBox";
import PieChartBox from "../../../Components/Chartbox/PieChartBox";
import AreaChartBox from "../../../Components/Chartbox/AreaChartBox";

const Home = () => {
  return (
    <section className="w-[100%] grid  grid-cols-Temp  auto-rows-layout gap-[20px] px-[20px]">
      <article className=" border-2 border-stone-400 rounded-[0.5rem] p-[20px] col-span-1 row-span-3">
        <Topdeals />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxUser} />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxProduct} />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px] col-span-1 row-span-3">
        <PieChartBox />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxConversion} />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxRevenue} />
      </article>
      <article className="border-2 bo<rder-stone-400 rounded-[0.5rem] p-[20px] col-span-2 row-span-2">
       <AreaChartBox/>
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <BarChartBox {...barChartBoxVisit} />
      </article>
      <article className="border-2 border-stone-400 rounded-[0.5rem] p-[20px]">
        <BarChartBox {...barChartBoxRevenue} />
      </article>
    </section>
  );
};

export default Home;
