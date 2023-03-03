import {BiRegularLogInCircle} from "solid-icons/bi"
import {CgSpinnerTwo} from "solid-icons/cg"

import {loaderState} from "../../signals/headerLoading"
import Logo from "../Logo/Logo"
import SiteMenu from "../SiteMenu/SiteMenu"


export default function SiteHeader() {
  const {state} = loaderState

  return (
    <div class="container row overflow-hidden h-14 my-2 lg:my-3 rounded-lg shadow-md bg-zinc-700 text-zinc-100">
      <Logo />
      <SiteMenu />
      <div class="flex gap-3">
        <div>
          {Object.values(state()).some(Boolean) && (
            <CgSpinnerTwo
              class="animate-spin"
              size={22} />
          )}
        </div>
        <BiRegularLogInCircle size={24} />
      </div>
    </div>
  )
}
