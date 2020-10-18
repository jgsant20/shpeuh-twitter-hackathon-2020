import Calendar from "../components/pages/SignIn";
import Trending from "../components/pages/Trending";
import Overview from "../components/pages/Overview";

const routes = [
    { name: "Overview", path: "/", exact: true, component: Overview },
    { name: "Trending", path: "/lectures", exact: true, component: Trending },
    { name: "Student ORGS", path: "/orgs", exact: true, component: Overview },
    { name: "Calendar", path: "/calendar", exact: true, component: Calendar },
    { name: "Grades", path: "/grades", exact: true, component: Calendar },
]


export default routes;