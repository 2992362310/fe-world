<script lang="ts" setup>
const list = [
  {
    name: '算法',
    description: 'hello-算法'
  },
  {
    name: '设计模式',
    description: '设计模式'
  },
  {
    name: '游戏开发',
    description: 'coco-creator'
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
    name: 'web componnet',
    description: 'web componnet'
  },
  {
    name: 'web container',
    description: 'web container'
  }
]
</script>

<template>
  <ul class="pl-10">
    <li v-for="item in list" :key="item.name">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>
