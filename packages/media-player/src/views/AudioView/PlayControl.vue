<template>
  <section class="play-control-wrap">
    <ul>
      <li>&leftarrow;</li>
      <li>&equals;</li>
      <li>&rightarrow;</li>
    </ul>
    <div class="process-wrap">
      <div>进度条</div>
      <div>00:00/00:00</div>
    </div>
    <ul>
      <li>&ovbar;</li>
      <li>&cir;</li>
      <li>&lesssim;</li>
    </ul>
  </section>
</template>

<style lang="less" scoped>
.play-control-wrap {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: rgba(213, 154, 154, 0.3);
  border: 1px solid rgba(119, 119, 119, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;

    li {
      cursor: pointer;

      &:hover {
        color: rgb(54, 68, 222);
      }
    }
  }

  .process-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
