import React from "react";
import LeftInfo from "./components/LeftInfo";
import MyMain from "./components/MyMain";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyHeader from "./components/MyHeader";

function MainPage() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://api.github.com/users/bokijonovm");
        if (res.ok) {
          let data = await res.json();
          setUserInfo(data);
        } else {
          console.log("Fetch user data failed!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
