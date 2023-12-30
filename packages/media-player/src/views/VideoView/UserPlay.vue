<template>
  <section class="user-list-wrap">
    <select placeholder="切换模式" class="toogle-wrap">
      <option value="saab">仅文字输入</option>
      <option value="saab">仅开启语音</option>
      <option value="opel">开启视频</option>
    </select>

    <ul class="user-list">
      <li>用户一</li>
      <li>用户二</li>
    </ul>

    <ul class="message-list">
      <li>
        <span>用户</span>
        <span>输入记录一</span>
      </li>
      <li>
        <span>用户</span>
        <span>输入记录二</span>
      </li>
    </ul>

    <div class="input-wrap">
      <input type="text" name="" id="" />
    </div>
  </section>
</template>

<style lang="less" scoped>
.user-list-wrap {
  width: 300px;
  height: 100%;
  padding: 10px;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    padding: 10px;
    background: rgba(213, 154, 154, 0.4);
    border: 1px solid rgba(119, 119, 119, 0.3);
    border-radius: 10px;
    flex: 1; // height
    list-style: none;
    overflow: auto;
  }

  .toogle-wrap {
    height: 40px;
  }

  .user-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    li {
      // width: 80px;
      height: 80px;
      border: 1px solid rgba(119, 119, 119, 0.3);
      border-radius: 50%;
    }
  }

  .message-list {
    li:nth-child(odd) {
      color: violet;
    }
  }

  .input-wrap {
    height: 40px;
  }
}
</style>
