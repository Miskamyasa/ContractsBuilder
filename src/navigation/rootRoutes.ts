import {lazy} from "solid-js"


import Home from "../pages/Home/Home"
import homeData from "../pages/Home/home.data"

import type {RouteData} from "./types"


export const rootRoutes: RouteData[] = [
  {
    title: "Home",
    path: "/",
    component: Home,
    data: homeData,
  },
  {
    title: "Blog",
    path: "/blog",
    component: lazy(() => import("../pages/Blog/Blog")),
    children: [
      {
        title: "Post",
        path: "/",
        component: lazy(() => import("../pages/Blog/List")),
      },
      {
        title: "Post",
        path: "/:slug",
        component: lazy(() => import("../pages/Blog/Post")),
      },
    ],
  },
  {
    title: "Service",
    path: "/service",
    component: lazy(() => import("../pages/Service/Service")),
  },
  {
    path: "**",
    component: lazy(() => import("../errors/404")),
  },
]
