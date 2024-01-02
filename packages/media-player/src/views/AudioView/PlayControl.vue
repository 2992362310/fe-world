<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import mp3 from './audio/小酒窝.mp3'

const MODE_DIC: {
  [key: string]: string
} = {
  order: 'play-order', // 顺序播放
  one: 'loop-one', // 单曲循环
  loop: 'loop-list', // 列表循环
  random: 'play-random' // 随机播放
}

const audioRef = ref()
const isPlaying = ref(false)
const total = ref(0)
const currentTime = ref(0)
const curSliderEvent = ref('up')
const curVolume = ref(20)
const playMode = ref('order')

const handlePlay = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
    } else {
      audioRef.value.play()
    }

    isPlaying.value = !isPlaying.value

    total.value = Math.floor(audioRef.value.duration)
    currentTime.value = Math.floor(audioRef.value.currentTime)
    curVolume.value = audioRef.value.volume * 100
    console.log(curVolume.value)
  }
}

// 改变进度
const handleChange1 = ({ value, eventType }: { value: number; eventType: string }) => {
  curSliderEvent.value = eventType
  currentTime.value = value

  if (eventType === 'up') {
    audioRef.value.currentTime = value
    audioRef.value.play()
    isPlaying.value = true
  }
}

// 改变声音 value =[0, 100]
const handleChange2 = (value: number) => {
  curVolume.value = value

  if (typeof audioRef.value.volume === 'number') {
    audioRef.value.volume = value / 100
  }
}

// 切换播放模式
const handleClick1 = () => {
  const keys = Object.keys(MODE_DIC)
  const index = keys.indexOf(playMode.value)
  if (index < keys.length - 1) {
    playMode.value = keys[index + 1]
  } else {
    playMode.value = keys[0]
  }

  console.log(playMode.value)
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

onMounted(() => {
  audioRef.value?.addEventListener('timeupdate', onAudioTimeUpdate)
})

onBeforeUnmount(() => {
  audioRef.value?.removeEventListener('timeupdate', onAudioTimeUpdate)
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
    <ProcessSlider :total="total" :current="currentTime" @change="handleChange1" />
    <div class="play-btn-wrap">
      <VolumeSlider :current="curVolume" @change="handleChange2" />
      <SvgIcon :name="MODE_DIC[playMode]" size="24" @click="handleClick1" />
      <SvgIcon name="music-list" size="24" />
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
