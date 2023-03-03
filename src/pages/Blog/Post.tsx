import {createEffect} from "solid-js"

import {updateHeadTags} from "../../signals/siteHeadMeta"


export default function Post() {
  createEffect(() => {
    updateHeadTags({title: "Post"})
  })
  return (
    <div class="">
      Post
    </div>
  )
}
