<script lang="ts" setup>
export interface ListItem {
  id: number
  tag: string
  icon: string
  name: string
  web_Url: string
}

interface InfoListProps {
  info: {
    name: string
    description: string
  }
  list: ListItem[]
}

defineProps<InfoListProps>()
</script>

<template>
  <div class="mb-2">
    <h1>{{ info.name }}</h1>
    <p>{{ info.description }}</p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.icon" alt="" srcset="" />
        <a :href="item.web_Url" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
  <div>
    <h1>特殊标签</h1>
    <ul>
      <li>video</li>
      <li>canvas</li>
    </ul>
  </div>
</template>
