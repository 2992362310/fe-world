import { defineAsyncComponent, type Component } from 'vue'
import SongImg from './SongImg.vue'

export interface IPanleMode {
  title: string
  mode: string
  componet?: Component
}

export const PANEL_MODES: IPanleMode[] = [
  {
    title: '图片',
    mode: 'img',
    componet: SongImg
  },
  {
    title: '歌词',
    mode: 'lyric',
    componet: defineAsyncComponent(() => import('./SongLyric.vue'))
  },
  {
    title: '特效',
    mode: 'effect'
    // componet: () => import('./SongLyric.vue')
  },
  {
    title: '曲谱',
    mode: 'score'
  }
]

export interface LrcItem {
  time: number
  words: string
}

function parseTime(timeStr: string) {
  const parts = timeStr.split(':')
  return +parts[0] * 60 + +parts[1]
}

export function parseLrc(lrc: string) {
  const lines = lrc.split('\n')
  const result: LrcItem[] = [] // 歌词对象数组
  for (let i = 0; i < lines.length; i++) {
    const str = lines[i]
    const parts = str.split(']')
    const timeStr = parts[0].substring(1)
    const obj = {
      time: parseTime(timeStr),
      words: parts[1]
    }
    result.push(obj)
  }
  return result
}
