import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyHeader from "./components/MyHeader";
import LeftInfo from "./components/LeftInfo";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />

      <Row>
        <Col md={4}>
          <LeftInfo />
        </Col>
        <Col md={8}></Col>
      </Row>

      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
