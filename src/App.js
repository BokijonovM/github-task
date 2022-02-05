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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <MyHeader />

        <Container>
          <Row>
            <Col className="p-0" md={4}>
              <LeftInfo />
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
