import { defineStore } from 'pinia'

interface AudioState {
  isPlaying: boolean // 是否正在播放
  audioRef: HTMLAudioElement | null
  currentTime: number
}

export const useAudioStore = defineStore('audioStore', {
  state: (): AudioState => ({
    isPlaying: false,
    audioRef: null,
    currentTime: 0
  }),
  actions: {
    setAudioRef(audioRef: HTMLAudioElement) {
      this.audioRef = audioRef
    },
    setCurrentTime(currentTime: number) {
      this.currentTime = currentTime
    },
    setPlayState(val: boolean) {
      this.isPlaying = val
    }
  }
})
