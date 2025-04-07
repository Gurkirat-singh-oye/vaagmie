import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserPage from "./components/UserPages/UserPage";
import Home from "./components/LandingPage/Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<UserPage />} />
      </Switch>
    </Router>
  );
};
