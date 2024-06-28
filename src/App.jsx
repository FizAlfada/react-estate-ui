import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/HomePage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";
import SinglePage from "./routes/SinglePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
  );
}

export default App;
