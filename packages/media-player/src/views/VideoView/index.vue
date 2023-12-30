<script lang="ts" setup>
import VideoList from './VideoList.vue'
import PlayPanel from './PlayPanel.vue'
import PlayControl from './PlayControl.vue'
import UserPlay from './UserPlay.vue'
</script>

<template>
  <section class="video-view-wrap">
    <VideoList />
    <div class="play-wrap">
      <PlayPanel />
      <PlayControl />
    </div>
    <UserPlay />
  </section>
</template>

<style lang="less" scoped>
.video-view-wrap {
  padding: 10px;
  width: 100%;
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
