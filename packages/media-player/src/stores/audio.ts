import { defineStore } from 'pinia'

interface AudioState {
  isPlaying: boolean // 是否正在播放
  currentTime: number
  audioRef: HTMLAudioElement | null
  audioContext: AudioContext | null
  analyser: AnalyserNode | null
  meidaSource: MediaElementAudioSourceNode | null
}

export const useAudioStore = defineStore('audioStore', {
  state: (): AudioState => ({
    isPlaying: false,
    currentTime: 0,
    audioRef: null,
    audioContext: null,
    analyser: null,
    meidaSource: null
  }),
  actions: {
    setCurrentTime(currentTime: number) {
      this.currentTime = currentTime
    },
    setPlayState(val: boolean) {
      this.isPlaying = val
    },
    setAudioRef(audioRef: HTMLAudioElement) {
      this.audioRef = audioRef

      const audioContext = new AudioContext()
      this.audioContext = audioContext
      this.meidaSource = audioContext.createMediaElementSource(audioRef)
      this.meidaSource.connect(audioContext.destination)
      this.analyser = audioContext.createAnalyser()
      this.meidaSource.connect(this.analyser)
    },

    connectAudioContext() {
      if (this.meidaSource && this.analyser) {
        this.meidaSource.connect(this.analyser)
      }
    },

    disConnectAudioContext() {
      if (this.meidaSource && this.analyser) {
        this.meidaSource.disconnect(this.analyser)
      }
    }
  }
})
