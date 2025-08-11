import "./App.css";
import Channel from "./components/Channel";
import Home from "./components/LandingPage/Home";
import { Routes } from "./Routes";

function App() {
  return (
    <div className=" ">
      {/** -ve z to fix footer background overlap problem */}
      <div className=" fixed w-full h-full bg-[#F5F5FA] -z-[30] " />
      <Routes />
    </div>
  );
}

export default App;
