import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import RepoDetails from "./components/RepoDetails";
import MainPage from "./MainPage";
import MainRepo from "./MainRepo";
import MainDetails from "./MainDetails";
import SearchUsers from "./components/SearchUsers";

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

        <Routes>
          <Route path="/" element={<MainPage userInfo={userInfo} />} />
          <Route
            path="/repositories"
            element={<MainRepo userInfo={userInfo} />}
          />
          <Route path="/:name" element={<MainDetails userInfo={userInfo} />} />
          <Route path="/search" element={<SearchUsers />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
