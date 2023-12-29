<script lang="ts" setup>
export interface InfoCardProps {
  info: {
    img: string
    title: string
    content: string
  }
}

const props = defineProps<InfoCardProps>()
const list = props.info.content.split('\n')
</script>

<template>
  <div class="card-wrap">
    <img :src="info.img" alt="" />
    <h1>{{ info.title }}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.card-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: #d4cfcf;
  }

  h1 {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #c63f1ace;
  }

  ul {
    font-size: 1rem;
    color: #c63f1a91;
  }
}
</style>
