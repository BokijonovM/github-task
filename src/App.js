import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyHeader from "./components/MyHeader";
import LeftInfo from "./components/LeftInfo";
import { Row, Col, Container } from "react-bootstrap";
import MyRepos from "./components/MyRepos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
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
    <BrowserRouter>
      <div className="App">
        <MyNavbar userInfo={userInfo} />
        <MyHeader userInfo={userInfo} />

        <Container>
          <Row>
            <Col className="p-0" md={4}>
              <LeftInfo userInfo={userInfo} />
            </Col>
            <Col className="p-0" md={8}>
              <Routes>
                <Route path="/" element={<MyMain />} />
                <Route path="/repositories" element={<MyRepos />} />
              </Routes>
            </Col>
          </Row>
        </Container>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
