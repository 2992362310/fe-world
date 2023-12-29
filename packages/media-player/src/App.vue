<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="app-wrap">
    <header>
      <div class="logo">
        <span>媒体播放器</span>
      </div>

      <nav>
        <RouterLink :class="{ actived: route.path === '/' }" to="/">首页</RouterLink>
        <RouterLink :class="{ actived: route.path === '/audio' }" to="/audio">音乐空间</RouterLink>
        <RouterLink :class="{ actived: route.path === '/video' }" to="/video">视频空间</RouterLink>
        <RouterLink :class="{ actived: route.path === '/ai' }" to="/ai">AI空间</RouterLink>
      </nav>

      <div class="info-wrap">
        <span class="theme"> 主题设置 </span>
        <span class="user">用户</span>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </section>
</template>

<style lang="less" scoped>
.app-wrap {
  height: 100%;
  @headerHeight: 80px;

  header {
    padding: 0 20px;
    height: @headerHeight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--h-bg);
    border-radius: 10px;

    .logo {
      font-size: 2rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 20px;

      a {
        text-decoration: none;
        width: 190px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 1.2rem;
        background: var(--h-nav-bg);
        border: 1px solid var(--h-nv-border);
        border-radius: 10px;
      }

      .actived {
        background: var(--h-nav-actived);
      }
    }

    .info-wrap {
      display: flex;
      align-items: center;
      gap: 10px;

      .theme {
        cursor: pointer;
      }

      .user {
        width: 2rem;
        height: 2rem;
        background: #fff;
        border: 1px solid pink;
        border-radius: 50%;
      }
    }
  }

  main {
    height: calc(100% - @headerHeight);
  }
}
</style>
