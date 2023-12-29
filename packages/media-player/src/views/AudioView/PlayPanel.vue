<template>
  <section class="play-panel-wrap">
    <ul>
      <li>歌词</li>
      <li>图片</li>
      <li>动效</li>
      <li>曲谱</li>
    </ul>
    <main>歌词</main>
  </section>
</template>

<style lang="less" scoped>
.play-panel-wrap {
  flex: 1; // height
  width: 100%;
  padding: 16px;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  ul {
    list-style: none;
    width: 240px;
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;

    li {
      // height: 100px;
      width: 100%;
      border: 1px solid palevioletred;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background-color: rgba(213, 154, 154, 0.4);
      }
    }
  }

  main {
    flex: 1; // width
    height: 100%;
    border: 1px solid palevioletred;
    border-radius: 10px;
    text-align: center;
    line-height: 100%;
  }
}
</style>
