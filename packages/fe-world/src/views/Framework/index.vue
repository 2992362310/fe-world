<script lang="ts" setup>
import { ref, onBeforeMount, computed } from 'vue'
import type { BaseItem, ListItem } from './type'
import baseData from './data/base.json'

const curItem = ref<BaseItem>(baseData[0])
const list = ref<ListItem[]>([])

onBeforeMount(() => {
  setListAsync()
})

const setListAsync = async () => {
  const dict: { [key: number]: string } = {
    1: 'vue',
    2: 'react'
  }
  if (!dict[curItem.value.id]) {
    list.value = []
    return
  }
  const res = await import(`./data/${dict[curItem.value.id]}.json`)
  list.value = res.default
}

const handleClick = (item: BaseItem) => {
  curItem.value = item
  setListAsync()
}

const show = computed(() => {
  return list.value.filter((val) => val.level === 2).length
})
</script>

<template>
  <section class="h-full flex">
    <ul class="w-[200px] h-full ul-wrap">
      <li
        class="py-2 text-gray-500 cursor-pointer hover:text-black"
        :class="{ 'active-li': curItem.id === item.id }"
        @click="handleClick(item)"
        v-for="item in baseData"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
    <main class="pl-4 flex-1 border">
      <div>
        <h1>{{ curItem.name }}</h1>
        <p>{{ curItem.description }}</p>
        <ul>
          <li v-for="item in list.filter((val) => val.level === 1)" :key="item.name">
            <img :src="item.icon" alt="" srcset="" />
            <a :href="item.web_Url" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <div v-show="show">
        <h1>工具</h1>
        <ul>
          <li v-for="item in list.filter((val) => val.level === 2)" :key="item.name">
            <img :src="item.icon" alt="" srcset="" />
            <a :href="item.web_Url" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>

<style lang="less" scoped>
.ul-wrap {
  border-right: 1px solid #e2e2e3;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }

  li {
    list-style-type: none;
  }

  .active-li {
    color: black;
  }
}
</style>
