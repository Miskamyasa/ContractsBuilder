import {createEffect, Suspense} from "solid-js"

import {useRouteData} from "@solidjs/router"

import Article from "../../components/Article/Article"
import FullLayout from "../../layout/FullLayout"
import {updateHeaderLoader} from "../../signals/headerLoading"
import {updateHeadTags} from "../../signals/siteHeadMeta"

import type HomeData from "./home.data"


export default function Home() {
  const data = useRouteData<typeof HomeData>()

  createEffect(() => {
    const payload = data()
    if (data.loading) {
      updateHeaderLoader({initiator: "Home", loading: true})
    } else {
      updateHeaderLoader({initiator: "Home", loading: false})
      if (payload) {
        updateHeadTags(payload, true)
      }
    }
  })

  const content = data()

  return (
    <FullLayout>
      <main class=" text-gray-700 p-8 bg-paper">
        {content && (
          <Article>
            <h1 class="text-2xl font-bold">{content.title}</h1>

          </Article>
        )}

        <p class="mt-4">
          <span>We love</span>
          <Suspense fallback={<span>...</span>}>
            <span class="font-bold">&nbsp;</span>
            <span>{JSON.stringify(data(), null, 2)}</span>
          </Suspense>
        </p>
      </main>
    </FullLayout>
  )
}
