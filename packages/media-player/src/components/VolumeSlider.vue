<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

export interface ControlSliderProps {
  current: number
}

const props = defineProps<ControlSliderProps>()

const emits = defineEmits(['change'])

const isShowSlider = ref(false)
const processRef = ref<HTMLDivElement | null>(null)

// 打开音量控制
const handleClick = () => {
  isShowSlider.value = !isShowSlider.value
}

// 关闭音量控制
const handleClick1 = (e: MouseEvent) => {
  const source = document.getElementById('volumeWrap')
  if (!source?.contains(e.target as Node)) {
    isShowSlider.value = false
  }
}

const moveSliderBar = (e: MouseEvent) => {
  if (processRef.value) {
    const { bottom, height } = processRef.value.getBoundingClientRect()

    // 最下面 最上面
    if (e.clientY > bottom + 1 || e.clientY < bottom - height - 1) {
      return
    }

    const offsetX = bottom - e.clientY
    const value = Math.max(Math.min((offsetX / height) * 100, 100), 0)
    emits('change', value)
  }
}

const handleMousedown = (event: MouseEvent) => {
  moveSliderBar(event)

  document.addEventListener('mouseup', handleMouseup)
  document.addEventListener('mousemove', handleMouseMove)
}

const handleMouseMove = (event: MouseEvent) => {
  moveSliderBar(event)
}

const handleMouseup = (event: MouseEvent) => {
  moveSliderBar(event)

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseup)
}

const changeVolume = (event: WheelEvent) => {
  // 获取滚轮的变化值
  const deltaY = -event.deltaY
  let value = props.current

  // console.log('deltaY', deltaY, value)

  // 设置音量
  if (deltaY >= 0) {
    value = Math.min(props.current + 5, 100)
  } else {
    value = Math.max(props.current - 5, 0)
  }

  if (isShowSlider.value) {
    emits('change', value)
  }
}

onMounted(() => {
  document.addEventListener('wheel', changeVolume)
  document.addEventListener('click', handleClick1)
})

onBeforeUnmount(() => {
  document.removeEventListener('wheel', changeVolume)
  document.removeEventListener('click', handleClick1)
})
</script>

<template>
  <div class="volume-wrap" id="volumeWrap">
    <SvgIcon class="volume-icon" name="volume" size="24" @click="handleClick" />
    <div ref="processRef" class="process" @mousedown="handleMousedown" v-show="isShowSlider">
      <div :style="{ height: `${current}%` }">
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.volume-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;

  .process {
    --process-border-radius: 10px;
    border: 1px solid pink;
    width: 10px; // width
    height: 100px;
    border: 1px solid rgba(213, 154, 154, 0.8);
    border-radius: var(--process-border-radius);
    cursor: pointer;
    position: absolute;
    bottom: 32px;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    div {
      width: 100%;
      background: rgba(213, 154, 154, 0.6);
      border-radius: var(--process-border-radius);

      span {
        position: absolute;
        right: 0;
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid blue;
        border-radius: 50%;
        transform: translate(25%, -50%);

        &:hover {
          transform: translate(25%, -50%) scale(1.2);
          border: 2px solid blue;
        }
      }
    }
  }

  .volume-icon:hover {
    cursor: pointer;
    color: blue;
  }
}
</style>
