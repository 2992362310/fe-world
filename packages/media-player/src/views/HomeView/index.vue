<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'

const infoList = [
  {
    img: '',
    title: '音乐空间',
    content: `歌曲列表里面简单的放着几首歌\n打开歌曲的歌词界面，歌词滚动着\n有时候，也会去编辑歌词\n有了歌词，页可以去看下吉他谱`
  },
  {
    img: '',
    title: '视频空间',
    content: `喜欢看喜剧、功夫、励志、系列\n一边播放一边聊天很有感觉\n能连麦的话，感觉更棒了\n要是还能连视频，直接起飞`
  },
  {
    img: '',
    title: 'AI空间',
    content: `孤独是一个人的狂欢，如果有AI呢\nAI会扯闲，还会画画呢\nAI会画画，还会给你想看的视频呢\nAI的样子是怎样的呢`
  }
]
</script>

<template>
  <section class="home-wrap">
    <InfoCard v-for="(item, index) in infoList" :key="index" :info="item" />
  </section>
</template>

<style lang="less" scoped>
.home-wrap {
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
