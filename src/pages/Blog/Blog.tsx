import {Outlet} from "@solidjs/router"

import ContentLayout from "../../layout/BlogLayout"


export default function Blog() {
  return (
    <ContentLayout>
      <main>
        <Outlet />
      </main>
    </ContentLayout>
  )
}
