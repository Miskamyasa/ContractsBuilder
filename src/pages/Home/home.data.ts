import {createResource} from "solid-js"

import delay from "delay"

import {getRecordBySlug} from "../../pocketbase/pocketbase"


const HomeData = () => {
  const [data] = createResource(async () => {
    await delay(3000)
    return getRecordBySlug("posts", "/")
  })
  return data
}

export default HomeData
