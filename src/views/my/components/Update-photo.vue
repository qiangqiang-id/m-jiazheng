<template>
  <div class="update-photo">
    <img :src="img"
         ref="img"
         class="photo-img" />
    <div class="toolbar">
      <div class="zuo"
           @click="$emit('close')">取消</div>
      <div class="you">完成</div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'UpdatePhoto',
  data () {
    return {
      cropper: null
    }
  },
  props: {
    img: {
      type: [String, Object],
      required: true
    }
  },
  mounted () {
    const image = this.$refs.img
    console.log(typeof image)
    this.cropper = new Cropper(image, {
      viewMode: 1,
      dragMode: 'move',
      aspectRatio: 1,
      // autoCropArea: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      background: false,
      movable: true
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.update-photo {
  background-color: #000;
  height: 100%;
  .photo-img {
    display: block;
    max-width: 100%;
  }
  .toolbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .zuo,
    .you {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90;
      height: 90px;
      font-size: 30;
      color: #fff;
    }
  }
}
</style>
