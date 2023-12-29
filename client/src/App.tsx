import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root.tsx";
import Home from "./components/Home.tsx";
import Fundraisers from "./components/Fundraisers.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/fundraisers" element={<Fundraisers />} />
      </Route>
    )
  );

  return (
    <div className="bg-background min-h-screen min-w-screen inset-0">
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
