<script lang="ts" setup>
import { ref } from 'vue'

export interface ControlSliderProps {
  total: number
  current: number
}

const props = defineProps<ControlSliderProps>()

const emits = defineEmits(['change'])

const processRef = ref<HTMLDivElement | null>(null)

const moveSliderBar = (e: MouseEvent, eventType: 'move' | 'down' | 'up') => {
  if (processRef.value) {
    const { left, width } = processRef.value.getBoundingClientRect()
    if (e.clientX < left || e.clientX > left + width + 1) {
      return
    }
    const offsetX = e.clientX - left
    const percent = offsetX / width
    const value = Math.floor(props.total * percent)

    if (props.total > 0) {
      emits('change', { eventType, value })
    }
  }
}

const handleMousedown = (event: MouseEvent) => {
  moveSliderBar(event, 'down')

  document.addEventListener('mouseup', handleMouseup)
  document.addEventListener('mousemove', handleMouseMove)
}

const handleMouseMove = (event: MouseEvent) => {
  moveSliderBar(event, 'move')
}

const handleMouseup = (event: MouseEvent) => {
  moveSliderBar(event, 'up')

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseup)
}

const formatSecToMin = (seconds: number) => {
  let minutes = Math.floor(seconds / 60)
  let remainingSeconds = +(seconds % 60).toFixed(0)
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${
    remainingSeconds < 100 && remainingSeconds > 9 ? '' : ''
  }${remainingSeconds}`
}
</script>

<template>
  <div class="process-wrap">
    <div ref="processRef" class="process" @mousedown="handleMousedown">
      <div :style="{ width: `${(current / total) * 100}%` }">
        <span></span>
      </div>
    </div>
    <div>{{ `${formatSecToMin(current)} / ${formatSecToMin(total)}` }}</div>
  </div>
</template>

<style lang="less" scoped>
.process-wrap {
  padding: 0 30px;
  flex: 1; // width
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .process {
    --process-border-radius: 10px;
    flex: 1; // width
    height: 10px;
    border: 1px solid rgba(213, 154, 154, 0.8);
    border-radius: var(--process-border-radius);
    cursor: pointer;
    // overflow: hidden;

    div {
      position: relative;
      height: 100%;
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
        // transform: translateY(-25%);
        transform: translate(50%, -25%);

        &:hover {
          transform: translate(50%, -25%) scale(1.2);
          border: 2px solid blue;
        }
      }
    }
  }
}
</style>
