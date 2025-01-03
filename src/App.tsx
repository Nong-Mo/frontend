import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Scan from "./pages/Scan";
import LibraryViewer from "./pages/LibraryViewer.tsx";
import Player from "./pages/Player.tsx";
import Home from "./pages/Home";
import Intro from "./pages/Intro.tsx";
import PrivateRoute from "./components/common/PrivateRoute.tsx";

const App = () => {
  return (
    <div className=" main-wrapper flex justify-center item-center min-h-screen">
      <Router>
        <main className="content-container flex justify-center w-440 h-[956px] relative">
          <Routes>
            <Route path="/intro" element={<Intro/>} />
            <Route 
              path="/home" 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/library" element={<LibraryViewer />} />
            <Route path="/player" element={<Player />} />
            <Route path="/" element={<Navigate to="/intro" replace />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
