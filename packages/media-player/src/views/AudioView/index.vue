<script lang="ts" setup>
import SongList from './SongList.vue'
import PlayPanel from './PlayPanel/index.vue'
import PlayControl from './PlayControl.vue'
</script>

<template>
  <section class="audio-view-wrap">
    <SongList />
    <div class="play-wrap">
      <PlayPanel />
      <PlayControl />
    </div>
  </section>
</template>

<style lang="less" scoped>
.audio-view-wrap {
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  .play-wrap {
    flex: 1; // width
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
