import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Main from "./Layout/Main.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import UserHome from "./UserManagement/UserHome.jsx";
import UsersList from "./UserManagement/UsersList.jsx";
import Update from "./UserManagement/Update.jsx";
import AddData from "./UserManagement/AddData.jsx";
import DataDetails from "./Pages/Home/DataDetails.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Tours from "./Pages/Tours/Tours.jsx";
import Hotels from "./Pages/Hotels/Hotels.jsx";
import Book from "./Pages/Book/Book.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wishlist from "./Pages/WishList/Wishlist.jsx";

import Booking from "./Dashboard/Booking.jsx";
import ManageBook from "./Dashboard/ManageBook";
import AdminHome from "./Dashboard/AdminHome.jsx";
import UsersHome from "./Dashboard/UsersHome.jsx";
import ContactUs from "./Dashboard/ContactUs.jsx";
import AllPackage from "./Dashboard/AllPackage.jsx";
import UpdatePackage from "./Dashboard/UpdatePackage.jsx";
import AddGuides from "./Dashboard/AddGuides.jsx";
import ManageGuide from "./Dashboard/ManageGuide.jsx";
import UpdateGuide from "./Dashboard/UpdateGuide.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/addData"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/updateuser/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
      {
        path: "/addData/:id",
        element: (
          <PrivateRoute>
            <DataDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addData/${params.id}`),
      },
      {
        path: "/tours",
        element: <Tours />,
        loader: () => fetch("http://localhost:5000/addData"),
      },
      {
        path: "/hotels",
        element: <Hotels />,
        loader: () => fetch("http://localhost:5000/addData"),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addData/${params.id}`),
      },
    ],
  },
  {
    path: "Dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/Dashboard/usermanagement",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/userslist",
        element: <UsersList />,
      },
      {
        path: "/Dashboard/addData",
        element: <AddData />,
      },
      {
        path: "/Dashboard/bookPlace",
        element: <Booking></Booking>,
      },
      {
        path: "/Dashboard/ManageBook",
        element: <ManageBook></ManageBook>,
      },
      {
        path: "/Dashboard/AdminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/Dashboard/UserHome",
        element: <UsersHome></UsersHome>,
      },
      {
        path: "/Dashboard/AllPackage",
        element: <AllPackage></AllPackage>,
      },
      {
        path: "/Dashboard/UpdatePackage/:id",
        element: <UpdatePackage />,
      },
      {
        path: "/Dashboard/AddGuide",
        element: <AddGuides></AddGuides>,
      },

      {
        path: "/Dashboard/manageGuide",
        element: <ManageGuide></ManageGuide>,
      },
      {
        path: "/Dashboard/UpdateGuide/:id",
        element: <UpdateGuide></UpdateGuide>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
