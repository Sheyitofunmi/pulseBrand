import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-row ">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 md:py-0 sm:pl-14 w-full mx-auto px-auto ">
        <Header />
        <div className="flex-1 py-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
