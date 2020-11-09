<template>
  <div class="update-name">
    <!-- 导航栏 -->
    <van-nav-bar title="设置昵称"
                 left-text="取消"
                 right-text="完成"
                 @click-left="$emit('close')"
                 @click-right="onConfirm" />
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
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止点击
        duration: 0// 持续展示
      })
      try {
        const locaName = this.locaName
        if (!locaName.length) {
          this.$toast('昵称不能为空！')
          return
        }

        // 更新视图
        this.$emit('input', locaName)
        // 关闭弹层
        this.$emit('close')
        // 提示成功
        this.$toast.success('信息更新成功！')
      } catch (err) {
        this.$toast('信息更新失败！')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.fields {
  padding: 12px;
}
</style>
