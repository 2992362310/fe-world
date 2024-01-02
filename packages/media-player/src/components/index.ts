import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon.vue'
import ProcessSlider from './ProcessSlider.vue'
import VolumeSlider from './VolumeSlider.vue'

const components: { [name: string]: Component } = {
  SvgIcon,
  ProcessSlider,
  VolumeSlider
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  }
}
