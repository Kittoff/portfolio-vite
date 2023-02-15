import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";

function App() {
  // const [isLoaded, setisLoaded] = useState(false);
  // window.addEventListener("load", (event) => {
  //   setisLoaded(true);
  // });
  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
