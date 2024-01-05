import { RouteObject, createBrowserRouter } from "react-router-dom";
import  SignIn from "../Pages/SignIn";
import  Register from "../Pages/Register";
import  ViewDetails from "../Pages/ViewDetails";
import Platform from "../Pages/Platform";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <div>First Page</div>
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
    }


];

export const router = createBrowserRouter(routes)