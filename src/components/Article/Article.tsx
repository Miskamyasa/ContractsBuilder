import type {ParentProps} from "solid-js"


export default function Article(props: ParentProps) {
  return (
    <article class="p-2 lg:p-3">
      {props.children}
    </article>
  )
}
