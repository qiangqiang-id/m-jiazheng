<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar class="nav-top-bar"
                 title="已联系家政人员"
                 left-arrow
                 @click-left="$router.back()" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-top-bar {
  left: 0px;
  top: 38px;
  width: 100%;
  height: 128px;
  line-height: 40px;
  background-color: rgba(63, 81, 181, 100);
  border: 1px solid rgba(255, 255, 255, 100);

  ::v-deep .van-nav-bar__title {
    color: rgba(255, 255, 255, 100);
    font-size: 32px;
    text-align: center;
    margin-left: 72px;
    font-family: PingFangSC-bold;
  }

  ::v-deep .van-icon {
    color: #fff;
    font-size: 36px;
    margin-top: 10px;
  }
}
</style>
