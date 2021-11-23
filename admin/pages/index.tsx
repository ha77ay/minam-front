import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const Admin = () => {
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
      <div>A차트</div>
      <div>B차트</div>
      <div>Server Sent Event</div>
    </div>
  );
};

export default Admin;
