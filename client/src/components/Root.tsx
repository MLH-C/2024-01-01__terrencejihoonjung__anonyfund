import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Root;
