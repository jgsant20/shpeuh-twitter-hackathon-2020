import Calendar from "../components/pages/Calendar";
import Lectures from "../components/pages/Lectures";
import Overview from "../components/pages/Overview";

const routes = [
    { name: "Overview", path: "/", exact: true, component: Overview },
    { name: "Lecture", path: "/lectures", exact: true, component: Lectures },
    { name: "Student ORGS", path: "/orgs", exact: true, component: Overview },
    { name: "Calendar", path: "/calendar", exact: true, component: Calendar },
    { name: "Grades", path: "/grades", exact: true, component: Calendar },
]


export default routes;