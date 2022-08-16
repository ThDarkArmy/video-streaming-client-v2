import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
// import Header from "./components/Header";
import Home from "./pages/home/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import VideoPlayerPage from "./pages/VideoPlayerPage";
import { CssBaseline } from "@mui/material";
import Player from "./pages/player/Player";
import Authentication from "./pages/authentication/Authentication";

const App = () => {
  return (
    <div>
      <CssBaseline />
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/watch" element={<Player />} />
          <Route exact path="/authentication" element={<Authentication />} />
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
