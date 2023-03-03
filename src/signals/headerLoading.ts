import {createRoot, createSignal} from "solid-js"


export const loaderState = createRoot(() => {
  const [state, setState] = createSignal({})
  return {state, setState}
})

export const updateHeaderLoader = (data: {initiator: string, loading: boolean}) => {
  const {initiator, loading} = data
  loaderState.setState({[initiator]: loading})
}
