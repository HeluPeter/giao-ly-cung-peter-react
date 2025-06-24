import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import QuizPage from "./pages/QuizPage";
// import AdminPage from "./pages/AdminPage";
// import LeaderboardPage from "./pages/LeaderboardPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<AdminPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
