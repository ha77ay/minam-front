import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Admin = () => {
  return (
    <>
      <div>Admin Dashboard</div>
      <span> Alert 경고창 넣어주세요!!!</span>
      <span>
        이제 여기에 그리드를 잡고(반응형), 차트를 그려서, 대시보드를 완성하면
        됩니다! + (미디어쿼리)
      </span>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            <div style={{ backgroundColor: "black" }}>안녕</div>
          </Col>
          <Col xs={6} md={4}>
            <div style={{ backgroundColor: "blue" }}>안녕</div>
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            <div style={{ backgroundColor: "red" }}>헬로</div>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div style={{ backgroundColor: "green" }}>헬로</div>{" "}
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>xs=6</Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
