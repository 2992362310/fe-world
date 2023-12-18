<script lang="ts" setup>
const list = [
  {
    name: '算法',
    description: 'hello-算法',
    url: 'https://www.hello-algo.com/'
  },
  {
    name: '设计模式',
    description: '设计模式',
    url: 'https://juejin.cn/post/6994464022628139045'
  },
  {
    name: '游戏开发',
    description: 'coco-creator',
    url: 'https://cocos.com/creator'
  },
  {
    name: 'nodejs开发',
    description: 'express、koa、egg.js'
  },
  {
    name: '工具链开发',
    description: 'rust、go'
  },
  {
    name: 'Web Component',
    description: 'web componnet',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components'
  },
  {
    name: 'web container',
    description: 'web container',
    url: 'https://webcontainers.io/'
  }
]
</script>

<template>
  <ul class="pl-10">
    <li v-for="item in list" :key="item.name">
      <h2>{{ item.name }}</h2>
      <a :href="item.url" target="_blank">{{ item.description }}</a>
    </li>
  </ul>
</template>
