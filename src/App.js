import ChooseCv from "./components/ChooseCv/ChooseCv.jsx";
import Home from "./components/Home/Home.jsx";
import MakeCv from "./components/MakeCv/MakeCv.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import CounterContextProvider from "./context/BuilderContext.js";
import About from "./components/About/About.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "choosecv", element: <ChooseCv /> },
      { path: "makecv", element: <MakeCv /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <CounterContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </CounterContextProvider>
  );
}

export default App;
