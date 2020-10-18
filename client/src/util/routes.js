import Overview from "../components/pages/Overview";
import Trending from "../components/pages/Trending";
import sports from "../components/pages/sports";
import covid19 from "../components/pages/covid19";

const routes = [
    { name: "Overview", path: "/", exact: true, component: Overview },
    { name: "Trending", path: "/Trending", exact: true, component: Trending },
    { name: "sports", path: "/sports", exact: true, component: sports },
    { name: "covid19", path: "/covid19", exact: true, component: covid19 },
]


export default routes;