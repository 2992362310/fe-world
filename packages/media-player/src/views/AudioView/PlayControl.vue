<!-- <script lang="ts" setup>

</script> -->

<template>
  <section class="play-control-wrap">
    <div class="play-btn-wrap">
      <SvgIcon name="left-circle" size="24" />
      <SvgIcon name="play-circle" size="24" />
      <SvgIcon name="right-circle" size="24" />
    </div>
    <div class="process-wrap">
      <div class="process">
        <div :style="{ width: '75%' }"></div>
      </div>
      <div>03:00/04:00</div>
    </div>
    <div class="play-btn-wrap">
      <SvgIcon name="volume" size="24" />
      <SvgIcon name="resume" size="28" />
      <SvgIcon name="music-list" size="32" />
    </div>
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

  .play-btn-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;

    svg {
      cursor: pointer;

      &:hover {
        color: rgb(54, 68, 222);
      }
    }
  }

  .process-wrap {
    padding: 0 30px;
    flex: 1; // width
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .process {
      width: 100%;
      height: 10px;
      border: 1px solid rgba(213, 154, 154, 0.8);
      border-radius: 10px;
      overflow: hidden;

      div {
        height: 100%;
        background: rgba(213, 154, 154, 0.6);
      }
    }
  }
}
</style>
