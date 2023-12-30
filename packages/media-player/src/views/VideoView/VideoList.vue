<template>
  <aside class="video-list-wrap">
    <h1>
      <input type="text" />
      <span>喜剧</span>
      <span>励志</span>
      <span>系列</span>
    </h1>
    <ul class="video-list">
      <li>
        <img src="" alt="" />
        <h3>
          <span>憨豆先生</span>
          <span>喜剧</span>
        </h3>
        <p>哈哈哈哈</p>
      </li>
      <li>
        <img src="" alt="" />
        <h3>
          <span>飞驰人生</span>
          <span>喜剧</span>
        </h3>
        <p>哈哈哈哈</p>
      </li>
      <li>
        <img src="" alt="" />
        <h3>
          <span>幸福终点站</span>
          <span>励志</span>
        </h3>
        <p>加油</p>
      </li>
      <li>
        <img src="" alt="" />
        <h3>
          <span>小鞋子</span>
          <span>励志</span>
        </h3>
        <p>加油</p>
      </li>
    </ul>
  </aside>
</template>

<style lang="less" scoped>
.video-list-wrap {
  padding: 10px;
  width: 300px;
  height: 100%;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;

  .video-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    li {
      list-style: none;
      // width: 135px;
      height: 160px;
      background: rgba(213, 154, 154, 0.1);
      border: 1px solid rgba(119, 119, 119, 0.3);
      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background: rgba(213, 154, 154, 0.2);
      }
    }
  }
}
</style>
