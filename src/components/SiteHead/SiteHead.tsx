import {Meta, Title} from "@solidjs/meta"

import {headMetaState} from "../../signals/siteHeadMeta"


export default function SiteHead() {
  const {meta} = headMetaState
  return (
    <>
      <Title>{meta().title}</Title>
      <Meta
        content={meta().description}
        name="description" />
    </>
  )
}
