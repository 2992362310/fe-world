<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import mp3 from '@/assets/audio/难念的经.mp3'
import { useAudioStore } from '@/stores/audio'

const MODE_DIC: {
  [key: string]: string
} = {
  order: 'play-order', // 顺序播放
  one: 'loop-one', // 单曲循环
  loop: 'loop-list', // 列表循环
  random: 'play-random' // 随机播放
}

const audioStore = useAudioStore()
const { setAudioRef, setCurrentTime, setPlayState } = audioStore
const currentTime = computed(() => audioStore.currentTime)
const isPlaying = computed(() => audioStore.isPlaying)

const audioRef = ref()
// const isPlaying = ref(false) // 是否正在播放
const total = ref(0) // 音频总时长
// const currentTime = ref(0) // 当前播放时长
const curSliderEvent = ref('up') // 播放控制条鼠标事件
const curVolume = ref(20) // 当前音频音量
const playMode = ref('order') // 当前播放模式

onMounted(() => {
  setAudioRef(audioRef.value)
})

const handlePlay = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
    } else {
      audioRef.value.play()
    }

    // isPlaying.value = !isPlaying.value

    setPlayState(!isPlaying.value)

    total.value = audioRef.value.duration
    curVolume.value = audioRef.value.volume * 100

    const curTime = audioRef.value.currentTime
    setCurrentTime(curTime)
  }
}

// 改变进度
const handleChange1 = ({ value, eventType }: { value: number; eventType: string }) => {
  curSliderEvent.value = eventType
  setCurrentTime(value)

  if (eventType === 'up') {
    audioRef.value.currentTime = value
    audioRef.value.play()

    setPlayState(true)
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
}

const onAudioTimeUpdate = () => {
  if (curSliderEvent.value === 'up') {
    const curTime = audioRef.value?.currentTime
    setCurrentTime(curTime)
  }

  // 播放结束，从头开始
  if (audioRef.value?.currentTime === audioRef.value?.duration) {
    // audioRef.value.currentTime = 0
    audioRef.value.play()
    setCurrentTime(0)
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
