<script setup lang="ts">
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()

const navs = [
  {
    name: '前端基础',
    path: '/base'
  },
  {
    name: '前端框架',
    path: '/framework'
  },
  {
    name: '前端库',
    path: '/lib'
  },
  {
    name: '前端实践',
    path: '/job'
  },
  {
    name: '前端面试',
    path: '/interview'
  },
  {
    name: 'VScode',
    path: '/vscode'
  },
  {
    name: '关于前端开发',
    path: '/about'
  }
]
</script>

<template>
  <header class="h-[60px] px-4 *btstack">
    <img alt="LOGO" class="rounded" src="@/assets/logo.svg" width="16" height="16" />

    <nav>
      <RouterLink
        v-for="item in navs"
        :key="item.path"
        :to="item.path"
        :style="{ color: route.path === item.path ? '#000' : '#666' }"
      >
        {{ item.name }}
      </RouterLink>
    </nav>

    <nav>
      <a href="https://gitee.com/youxi2014/fe-world.git" target="_blank">Gitee</a>
      <a href="/github" target="_blank">GitHub</a>
    </nav>
  </header>

  <main class="h-[calc(100%-100px)]">
    <router-view />
  </main>

  <footer class="h-[40px]">
    <div class="text-gray-500 text-xs">注：本站仅供学习交流，如有侵权请联系站长删除。</div>
  </footer>
</template>

<style lang="less" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    text-decoration: none;
    font-size: 16px;
  }
}
</style>
