import type {ParentProps} from "solid-js"

import SiteFooter from "../components/SiteFooter/SiteFooter"
import SiteHeader from "../components/SiteHeader/SiteHeader"
import SiteWrapper from "../components/SiteWrapper/SiteWrapper"


export default function RootLayout(props: ParentProps) {
  return (
    <SiteWrapper>
      <SiteHeader />
      {props.children}
      <SiteFooter />
    </SiteWrapper>
  )
}
