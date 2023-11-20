import { lazy } from "react";


const Routes = [
    {
        path: "/detail",
        component: lazy(()=>import("../components/DetailStories/detailStories")),
        title: "Detail",
        exact: true,
        type:"core"
    },
    {
        path: "/feeds",
        component: lazy(()=>import("../pages/Feeds")),
        title: "feeds",
        exact: true,
        type:"core"
    }
]

export default Routes;