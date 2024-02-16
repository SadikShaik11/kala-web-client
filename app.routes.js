import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/modules/user-onboarding/LandingPage";
import SignupComp from "./src/modules/user-onboarding/SignupComp";
import SigninComp from "./src/modules/user-onboarding/SigninComp";

const routes = createBrowserRouter([{
    path: '/',
    element: <SignupComp />
}, {
    path: '/sign-in',
    element: <SigninComp />
}


])

module.exports = routes