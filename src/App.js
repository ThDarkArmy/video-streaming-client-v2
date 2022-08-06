import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
// import Header from "./components/Header";
import Home from "./pages/home/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import VideoPlayerPage from "./pages/VideoPlayerPage";

const App = () => {
  return (
    <div>
    <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path={"/watch"} element={<VideoPlayerPage/>} /> */}
          <Route path="*">404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
