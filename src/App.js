import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import LatestNews from "./components/News/News.js";
import LiveNews from "./components/LiveNews/LiveNews";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Router basename={"/Al-Aajel-News-Website"}>
        <Navbar />
        <Routes>
          <Route path="/" exact element=<Home /> />
          <Route
            path="/latestNews"
            element={<LatestNews category="general" />}
          />
          <Route
            path="/business"
            element={<LatestNews category="business" />}
          />
          <Route
            path="/entertainment"
            element={<LatestNews category="entertainment" />}
          />
          <Route path="/health" element={<LatestNews category="health" />} />
          <Route path="/science" element={<LatestNews category="science" />} />
          <Route path="/sports" element={<LatestNews category="sports" />} />
          <Route
            path="/technology"
            element={<LatestNews category="technology" />}
          />
          <Route path="/liveNews" element=<LiveNews /> />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
