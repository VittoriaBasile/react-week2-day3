import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
//import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      {/* <MyProfile /> */}
      <Footer />
    </div>
  );
}

export default App;
