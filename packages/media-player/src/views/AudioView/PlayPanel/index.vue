<script lang="ts" setup>
import { shallowRef } from 'vue'
import { PANEL_MODES, type IPanleMode } from './conf'

defineProps({
  isPlaying: {
    type: Boolean,
    default: false
  }
})

const curPanelMode = shallowRef(PANEL_MODES[0])

const handleClick = (val: IPanleMode) => {
  curPanelMode.value = val
}
</script>

<template>
  <section class="play-panel-wrap">
    <ul class="modes-ul">
      <li
        v-for="item in PANEL_MODES"
        :key="item.mode"
        :class="{ active: curPanelMode.mode === item.mode }"
        @click="handleClick(item)"
      >
        {{ item.title }}
      </li>
    </ul>
    <main class="play-panel-main">
      <keep-alive>
        <component :is="curPanelMode?.componet" />
      </keep-alive>
    </main>
  </section>
</template>

<style lang="less" scoped>
.play-panel-wrap {
  flex: 1; // height
  width: 100%;
  padding: 16px;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  .modes-ul {
    list-style: none;
    width: 240px;
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;

    li {
      // height: 100px;
      width: 100%;
      border: 1px solid palevioletred;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background-color: rgba(213, 154, 154, 0.4);
      }
    }

    .active {
      background-color: rgba(213, 154, 154, 0.6) !important;
    }
  }

  .play-panel-main {
    flex: 1; // width
    height: 100%;
    border: 1px solid palevioletred;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
