<script lang="ts" setup>
import { computed } from 'vue'
import { useAudioStore } from '@/stores/audio'

const audioStore = useAudioStore()
const isPlaying = computed(() => audioStore.isPlaying)
</script>

<template>
  <img
    class="song-img"
    :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
    src="../../../assets/audio/2.png"
    alt=""
  />
</template>

<style lang="less" scoped>
.song-img {
  width: 40vh;
  height: 40vh;
  border: 1px solid palevioletred;
  border-radius: 50%;
  animation: spin 10s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
