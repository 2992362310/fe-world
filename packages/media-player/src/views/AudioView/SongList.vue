<template>
  <aside class="song-list-wrap">
    <div>
      <h1>流行</h1>
      <ul>
        <li>稻香</li>
        <li>桥边姑娘</li>
        <li>宝贝</li>
      </ul>
    </div>
    <div>
      <h1>民谣</h1>
      <ul>
        <li>成都</li>
        <li>蓝莲花</li>
        <li>七月上</li>
      </ul>
    </div>
    <div>
      <h1>摇滚</h1>
      <ul>
        <li>假行僧</li>
        <li>再见杰克</li>
        <li>真的爱你</li>
      </ul>
    </div>
  </aside>
</template>

<style lang="less" scoped>
.song-list-wrap {
  width: 300px;
  height: 100%;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  overflow: auto;

  div {
    h1 {
      padding: 4px 6px;
      font-size: 18px;
      font-weight: 500;
      background: rgba(213, 154, 154, 0.5);
    }

    ul {
      list-style: none;

      li {
        margin: 4px 10px;
        padding: 4px 8px;
        border-radius: 4px;

        &:hover {
          cursor: pointer;
          background: rgba(213, 154, 154, 0.4);
        }
      }
    }
  }
}
</style>
