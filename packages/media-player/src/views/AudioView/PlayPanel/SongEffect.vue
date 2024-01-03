<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useAudioStore } from '@/stores/audio'

const audioStore = useAudioStore()
const { connectAudioContext, disConnectAudioContext } = audioStore
const audioRef = computed(() => audioStore.audioRef)
const analyser = computed(() => audioStore.analyser)
const isPlaying = computed(() => audioStore.isPlaying)

let animationFunc: number

const canvasRef = ref<HTMLCanvasElement>()

function draw() {
  // console.log(11111)
  if (analyser.value && canvasRef.value) {
    animationFunc = requestAnimationFrame(() => {
      draw()
    })

    const amplitudeArray = new Uint8Array(analyser.value.frequencyBinCount)
    analyser.value.getByteTimeDomainData(amplitudeArray)

    const canvasElt = canvasRef.value
    const canvasContext = canvasElt.getContext('2d')

    if (canvasContext) {
      // Clear the canvas
      canvasContext.clearRect(0, 0, canvasElt.width, canvasElt.height)

      // Draw the amplitude inside the canvas
      for (let i = 0; i < amplitudeArray.length; i++) {
        const value = amplitudeArray[i] / 256
        const y = canvasElt.height - canvasElt.height * value
        canvasContext.fillStyle = 'white'
        canvasContext.fillRect(i, y, 1, 1)
      }
    }
  }
}

onMounted(() => {
  if (audioRef.value) {
    connectAudioContext()

    if (analyser.value && isPlaying) {
      draw()
    }

    audioRef.value.onplay = () => {
      // console.log('play', 11)
      draw()
    }

    audioRef.value.onpause = () => {
      // console.log('pause', 11)
      cancelAnimationFrame(animationFunc)
    }
  }
})

onBeforeUnmount(() => {
  disConnectAudioContext()
  cancelAnimationFrame(animationFunc)
})
</script>

<template>
  <canvas ref="canvasRef" class="song-effect-canvas"></canvas>
</template>

<style lang="less" scoped>
.song-effect-canvas {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 10px;
}
</style>
