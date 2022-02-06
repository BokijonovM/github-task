import React from "react";
import LeftInfo from "./components/LeftInfo";
import MyMain from "./components/MyMain";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyHeader from "./components/MyHeader";

function MainPage({ userInfo }) {
  return (
    <div>
      <MyHeader userInfo={userInfo} />
      <Container>
        <Row>
          <Col className="p-0" md={4}>
            <LeftInfo userInfo={userInfo} />
          </Col>
          <Col className="p-0" md={8}>
            <MyMain />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
