<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import mp3 from './audio/小酒窝.mp3'

const audioRef = ref()
const isPlaying = ref(false)
const total = ref(0)
const currentTime = ref(0)
const curSliderEvent = ref('up')

const handlePlay = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
    } else {
      audioRef.value.play()
    }

    isPlaying.value = !isPlaying.value

    total.value = Math.floor(audioRef.value?.duration)
    currentTime.value = Math.floor(audioRef.value?.currentTime)
  }
}

const handleChange = ({ value, eventType }: { value: number; eventType: string }) => {
  curSliderEvent.value = eventType
  currentTime.value = value

  if (eventType === 'up') {
    audioRef.value.currentTime = value
    audioRef.value.play()
    isPlaying.value = true
  }
}

const onAudioTimeUpdate = () => {
  if (curSliderEvent.value === 'up') {
    currentTime.value = Math.floor(audioRef.value?.currentTime)
  }

  if (audioRef.value?.currentTime === audioRef.value?.duration) {
    audioRef.value.currentTime = 0
    audioRef.value.play()
  }
}

const changeVolume = (event: WheelEvent) => {
  // 获取滚轮的变化值
  const deltaY = -event.deltaY
  // 设置音量
  if (audioRef.value) {
    if (deltaY >= 0) {
      audioRef.value.volume = Math.min(audioRef.value.volume + 0.1, 1)
    } else {
      audioRef.value.volume = Math.max(audioRef.value.volume - 0.1, 0)
    }
  }
}

onMounted(() => {
  audioRef.value?.addEventListener('timeupdate', onAudioTimeUpdate)
  document.addEventListener('wheel', changeVolume)
})

onBeforeUnmount(() => {
  audioRef.value?.removeEventListener('timeupdate', onAudioTimeUpdate)
  document.removeEventListener('wheel', changeVolume)
})
</script>

<template>
  <section class="play-control-wrap">
    <audio :src="mp3" ref="audioRef"></audio>
    <div class="play-btn-wrap">
      <SvgIcon name="left-circle" size="24" />
      <SvgIcon :name="isPlaying ? 'pause-circle' : 'play-circle'" size="24" @click="handlePlay" />
      <SvgIcon name="right-circle" size="24" />
    </div>
    <ControlSlider :total="total" :current="currentTime" @change="handleChange" />
    <div class="play-btn-wrap">
      <SvgIcon name="volume" size="24" />
      <SvgIcon name="resume" size="28" />
      <SvgIcon name="music-list" size="32" />
    </div>
  </section>
</template>

<style lang="less" scoped>
.play-control-wrap {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .play-btn-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;

    svg {
      cursor: pointer;

      &:hover {
        color: rgb(54, 68, 222);
      }
    }
  }

  .process-wrap {
    padding: 0 30px;
    flex: 1; // width
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .process {
      width: 100%;
      height: 10px;
      border: 1px solid rgba(213, 154, 154, 0.8);
      border-radius: 10px;
      overflow: hidden;

      div {
        height: 100%;
        background: rgba(213, 154, 154, 0.6);
      }
    }
  }
}
</style>
