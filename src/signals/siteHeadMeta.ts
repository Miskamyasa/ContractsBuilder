import {createRoot, createSignal} from "solid-js"


const separator = " · "

export const headMetaState = createRoot(() => {
  const [meta, setMeta] = createSignal({
    title: "Contracts Builder",
    description: "Contracts Builder is a tool for creating and managing rental contracts",
  })

  const setTitle = (title: string) => {
    const _t = title.trim()
    if (!_t || _t === meta().title) return
    setMeta({...meta(), title: _t})
  }

  const appendTitle = (str: string) => {
    const _s = str.trim()
    if (!_s) return

    const [title, old] = meta().title.split(separator)
    if (_s === old) return

    setMeta({...meta(), title: title + separator + _s})
  }

  const setDescription = (description: string) => {
    const d = description.trim()
    if (!d || d === meta().description) return

    setMeta({...meta(), description})
  }

  return {meta, setTitle, appendTitle, setDescription}
})

export const updateHeadTags = (data?: {title?: string, description?: string}, replace = false) => {
  if (data) {
    const {title, description} = data
    if (title) {
      replace ? headMetaState.setTitle(title) : headMetaState.appendTitle(title)
    }
    if (description) {
      headMetaState.setDescription(description)
    }
  }
}
