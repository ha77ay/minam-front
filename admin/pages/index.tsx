import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Prop {
  data: {
    date: string;
    amount: number;
  }[];
}

const Admin = ({ data }: Prop) => {
  // 차트 데이터 설정
  const chartData: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  } = {
    // series: 실제 데이터 값
    // [{name: "일자", data: [8702, 3400 ...]}]
    series: [{ name: "일자", data: [8521, 44124, 213123] }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      // x축의 라벨
      xaxis: {
        // categories: ["01-01", "01-02" ...]
        categories: ["01-01", "01-02"],      },
      // y축의 형식을 지정
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
      },
    },
  };

  return (
    <div className="wrapper">
      <div className="kpi kpi-event">
        <h1>11건</h1>
        <div>새 이벤트</div>
      </div>
      <div className="kpi kpi-review">
        <h1>20건</h1>
        <div>새 시술후기</div>
      </div>
      <div className="kpi kpi-reservation">
        <h1>5건</h1>
        <div>새 상담예약</div>
      </div>
      <div className="kpi kpi-profit">
        <h1>₩ 570K</h1>
        <div>주간 과금액</div>
      </div>
      <div className="main-chart">
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height="200px"
          />
        )}{" "}
      </div>
      <div className="sse">Server Sent Event</div>
      <div className="creators">Crew profile</div>
    </div>
  );
};

export default Admin;
