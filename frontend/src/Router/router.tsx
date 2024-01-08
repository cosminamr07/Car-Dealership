import { RouteObject, createBrowserRouter } from "react-router-dom";
import  SignIn from "../Pages/SignIn";
import  Register from "../Pages/Register";
import  ViewDetails from "../Pages/ViewDetails";
import Platform from "../Pages/Platform";
import AdminPage from "../Pages/AdminPage";
import Transaction from "../Pages/Transaction";
import Success from "../Pages/Success"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/Home",
        element: <div>Prima componenta</div>
    },
    {
        path: "/Login",
        element: <SignIn />
    },
    {
        path: "/Register",
        element: <Register />
    },
    {
        path: "/ViewDetails",
        element: <ViewDetails/>
    },
    {
        path: "/Platform",
        element: <Platform/>
    },
    {
        path: "/AdminPage",
        element: <AdminPage/>
    },
    {
        path: "/Transaction",
        element: <Transaction/>
    },
    {
        path: "/Success",
        element: <Success/>
    },
  

];

export const router = createBrowserRouter(routes)