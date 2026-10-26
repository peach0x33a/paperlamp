import type { Component } from "vue"
import { createApp, h } from "vue"

/**
 * Renders a component to an HTML string synchronously. Unovis tooltip triggers
 * need a string (or element) on every hover, so this mounts the component into
 * a detached node, reads its markup and unmounts it again.
 */
export function componentToString(component: Component, props: Record<string, unknown> = {}): string {
  const el = document.createElement("div")
  const app = createApp({ render: () => h(component, props) })
  app.mount(el)
  const html = el.innerHTML
  app.unmount()
  return html
}
