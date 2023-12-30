import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

export default function svgIcon() {
  return createSvgIconsPlugin({
    // 指定 SVG图标 保存的文件夹路径
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定 使用svg图标的格式
    symbolId: 'icon-[dir]-[name]'
  })
}
