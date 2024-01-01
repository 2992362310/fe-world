import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon.vue'
import ControlSlider from './ControlSlider.vue'

const components: { [name: string]: Component } = {
  SvgIcon,
  ControlSlider
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}
