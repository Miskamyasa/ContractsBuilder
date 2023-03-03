import {createEffect} from "solid-js"

import {updateHeadTags} from "../../signals/siteHeadMeta"


export default function List() {
  createEffect(() => {
    updateHeadTags({title: "Blog"})
  })
  return (
    <div class="">
      List
    </div>
  )
}
