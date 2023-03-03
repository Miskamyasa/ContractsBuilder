import type {Component} from "solid-js"

import type {RouteDataFunc} from "@solidjs/router"


export type RouteData = {
  title?: string,
  path: string,
  component: Component,
  data?: RouteDataFunc,
  children?: RouteData[],
}
