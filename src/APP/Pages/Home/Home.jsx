import React from "react";
import Topdeals from "../../../Components/Top Deals/Topdeals";
import ChartBox from "../../../Components/Chartbox/chartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
} from "../../../Components/data";

const Home = () => {
  return (
    <section className="w-[100%] grid  grid-cols-Temp  auto-rows-layout gap-[20px] px-[20px]">
      <article className=" border-2 border-red-500 rounded-[0.5rem] p-[20px] col-span-1 row-span-3">
        <Topdeals />
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxUser} />
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxProduct} />
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px] col-span-1 row-span-3">
        <ChartBox {...chartBoxRevenue} />
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        <ChartBox {...chartBoxConversion} />
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        box
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px] col-span-2 row-span-2">
        box 7
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        box 8
      </article>
      <article className="border-2 border-red-500 rounded-[0.5rem] p-[20px]">
        box 9
      </article>
    </section>
  );
};

export default Home;
