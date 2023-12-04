import { RouteObject, createBrowserRouter } from "react-router-dom";
import  SignIn from "../Pages/SignIn";
import  Register from "../Pages/Register";

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
    }

];

export const router = createBrowserRouter(routes)