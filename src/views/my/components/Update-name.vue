<template>
  <div class="update-name">
    <!-- 导航栏 -->
    <van-nav-bar title="设置昵称"
                 left-text="取消"
                 right-text="完成"
                 @click-left="$emit('close')" />
    <!-- 输入框 -->
    <div class="fields">
      <van-field v-model.trim="locaName"
                 rows="2"
                 autosize
                 type="textarea"
                 maxlength="7"
                 placeholder="请输入昵称"
                 show-word-limit />
    </div>
  </div>
</template>

<script>

export default {
  name: 'UpdateName',
  data () {
    return {
      locaName: this.value
    }
  }
  // props: {
  //   value: {
  //     type: String,
  //     required: true
  //   }
  // }

}
</script>

<style lang="scss" scoped>
.fields {
  padding: 12px;
}
</style>
