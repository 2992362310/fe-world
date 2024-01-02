<script lang="ts" setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { parseLrc, type LrcItem } from './conf'
import { useAudioStore } from '@/stores/audio'

const audioStore = useAudioStore()
const currentTime = computed(() => audioStore.currentTime)

const lrcList = ref<LrcItem[]>([])
const lyricWrapRef = ref()
const curIndex = ref(-1)

onBeforeMount(() => {
  fetch('src/assets/audio/难念的经.lrc')
    .then((res) => res.text())
    .then((text) => {
      lrcList.value = parseLrc(text)
      // console.log(lrcList.value)
    })
})

/**
 * 计算出，在当前播放器播放到第几秒的情况下
 * lrcData数组中，应该高亮显示的歌词下标
 * 如果没有任何一句歌词需要显示，则得到-1
 */
function findIndex(curTime: number) {
  // 播放器当前时间
  for (let i = 0; i < lrcList.value.length; i++) {
    if (curTime < lrcList.value[i].time) {
      return i - 1
    }
  }
  // 找遍了都没找到（说明播放到最后一句）
  return lrcList.value.length - 1
}

watch(
  () => currentTime.value,
  (curVal) => {
    if (typeof curVal === 'number') {
      const index = findIndex(curVal)
      curIndex.value = index
      setOffset()
    }
  }
)

function setOffset() {
  const container = document.querySelector('.play-panel-main')
  const ul = lyricWrapRef.value
  const li = ul.children[0]

  if (container && ul && li) {
    const index = curIndex.value

    // 容器高度
    var containerHeight = container.clientHeight
    // 每个 li 的高度
    var liHeight = li.clientHeight
    // 最大偏移量
    var maxOffset = ul.clientHeight - containerHeight

    var offset = liHeight * index + liHeight / 2 - containerHeight / 2
    if (offset < 0) {
      offset = 0
    }
    if (offset > maxOffset) {
      offset = maxOffset
    }
    ul.style.transform = `translateY(-${offset}px)`
  }
}
</script>

<template>
  <div class="song-lyric-wrap">
    <ul ref="lyricWrapRef">
      <li v-for="(item, index) in lrcList" :key="item.time" :class="{ active: curIndex === index }">
        {{ item.words }}
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.song-lyric-wrap {
  width: 100%;
  height: 70vh;
  overflow-y: scroll;
  transition: 1s;

  &::-webkit-scrollbar {
    width: 0;
  }

  ul {
    list-style: none;
    // transform: translateY(50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      padding: 6px 0;
      transition: 0.3s;
    }

    .active {
      color: antiquewhite;
      transform: scale(1.3);
    }
  }
}
</style>
