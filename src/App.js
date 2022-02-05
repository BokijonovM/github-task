import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
