import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/home/Home";
import { CssBaseline } from "@mui/material";
import Player from "./pages/player/Player";
import Authentication from "./pages/authentication/Authentication";
import Channel from "./pages/channel/Channel";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/watch" element={<Player />} />
          <Route exact path="/authentication" element={<Authentication />} />
          <Route exact path="/channel/:channelId" element={<Channel />} />
          <Route path="*">404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
